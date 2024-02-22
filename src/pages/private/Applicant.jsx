import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import { PrivateLayout } from "../../layout/PrivateLayout";
import { EditableInput } from "../../components/EditableInput";
import { formatDate } from "../../helpers/textFormatFunctions";
import { Modal } from "../../components/Modal";

export const Applicant = () => {
  const { id } = useParams();
  const { response, loading, error, fetchData } = useFetch();
  const [edit, setEdit] = useState(false);
  const [modalProperties, setModalProperties] = useState(false);
  const navigate = useNavigate();

  const [editedFields, setEditedFields] = useState({});

  useEffect(() => {
    fetchData(`private/leer_aspirante_por_id?id=${id}`, 'GET');
  }, []);

  useEffect(() => {
    if (response) setEditedFields(response.data);
  }, [response]);

  const handleInputChange = ({ target }) => {
    setEditedFields(prevFields => ({
      ...prevFields,
      [target.name]: target.value
    }));
  };

  const handleProfiling = () => {
    fetchData(`private/perfilar_aspirante`, 'POST', editedFields);
  }

  const handleSave = () => {
    fetchData(`private/modificar_aspirante?id=${id}`, 'PUT', editedFields);
    setEdit(!edit);
  }

  const handleDelete = (id) => {

    if (!modalProperties) {
      setModalProperties(() => (true));
    } else {
      fetchData(`private/eliminar_aspirante?id=${id}`, 'DELETE', { id });
      if (response.status >= 200) {
        navigate('/applicants');
        navigate(0);
      }
    }
  }

  if (loading) {
    return (
      <PrivateLayout title='Aspirante'>
        Loading...
      </PrivateLayout>
    );
  }

  if (error) {
    return (
      <PrivateLayout title='Aspirante'>
        {error.data.message}
      </PrivateLayout>
    );
  }

  return (
    <PrivateLayout title='Aspirante'>
      {modalProperties && <Modal setModalProperties={setModalProperties} acceptFunction={handleDelete} />}

      <div className='flex gap-2 py-5 justify-end'>
        {edit
          ? <button onClick={handleSave} className='bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-full'>Guardar</button>
          : <button onClick={() => setEdit(!edit)} className='bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full'>Editar</button>
        }

        <button onClick={() => handleDelete(id)} className='bg-rose-700 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full'>Eliminar</button>
      </div>
      {
        response && (
          <div className='grid grid-col-2 grid-flow-col gap-5'>
            <div className='p-5 bg-senary rounded-2xl col-span-1 row-span-2'>
              <div className='font-semibold text-2xl pb-3 mb-3 border-b-4 border-zinc-300'>Datos del Aspirante</div>
              <EditableInput edit={edit} title='Tipo Documento' name='tipoDocumento' value={editedFields.tipoDocumento} onChange={handleInputChange} />
              <EditableInput edit={edit} title='Numero de Documento' name='numDocumento' value={editedFields.numDocumento} onChange={handleInputChange} />
              <EditableInput edit={edit} title='Nombre' name='nombre' value={editedFields.nombre} />
              <EditableInput edit={edit} title='Fecha de Nacimiento' name='nacimiento' value={formatDate(editedFields.nacimiento)} onChange={handleInputChange} />
              <EditableInput edit={edit} title='Genero' name='genero' value={editedFields.genero} onChange={handleInputChange} />
              <EditableInput edit={edit} title='Correo' name='email' value={editedFields.email} onChange={handleInputChange} />
              <EditableInput edit={edit} title='Celular' name='celular' value={editedFields.celular} />
              <EditableInput edit={edit} title='Dirección' name='direccionResidencia' value={editedFields.direccionResidencia} onChange={handleInputChange} />
              <EditableInput edit={edit} title='Reconocimiento' name='reconocimiento' value={editedFields.reconocimiento} onChange={handleInputChange} />
              <EditableInput edit={edit} title='Programa de Interes' name='programa' value={editedFields.programa} onChange={handleInputChange} />
              <EditableInput title='Prueba Terminada' value={editedFields.validadorDeTestGorilla?.pruebaTerminada ? 'Si' : 'No'} />
              {editedFields.validadorDeTestGorilla?.pruebaTerminada &&
                <EditableInput title='Puntaje' value={editedFields.validadorDeTestGorilla?.puntajePromedio} />
              }

            </div>
            <div className='p-5 bg-senary rounded-2xl '>
              <div className='font-semibold text-2xl pb-3 mb-3 border-b-4 border-zinc-300'>Criterios de perfilación</div>
              <EditableInput edit={edit} name='edad' title='Edad' value={editedFields.edad} onChange={handleInputChange} />
              <EditableInput edit={edit} name='ocupacion' title='Ocupacion' value={editedFields.ocupacion} onChange={handleInputChange} />
              <EditableInput edit={edit} name='ciudad' title='Residencia' value={`${editedFields.ciudad}, ${editedFields.departamento}`} onChange={handleInputChange} />
              <EditableInput edit={edit} name='estrato' title='Estrato' value={editedFields.estrato} onChange={handleInputChange} />
              <EditableInput edit={edit} name='nivelEducativo' title='Nivel Educativo' value={editedFields.nivelEducativo} onChange={handleInputChange} />
              <EditableInput edit={edit} name='discapacidad' title='Discapacidad' value={editedFields.discapacidad} onChange={handleInputChange} />
            </div>

            <div className='p-5 bg-senary rounded-2xl '>
              <EditableInput edit={edit} name='estadoAspirante' title='Estado del Proceso' value={editedFields.estadoAspirante} />
              <EditableInput edit={edit} name='perfilAspirante' title='Perfilamiento Aspirante' value={editedFields.perfilamientoAspirante?.perfilAspirante} onChange={handleInputChange} />
              <EditableInput title='Tipo de perfilamiento' name='' value={editedFields.perfilamientoAspirante?.tipoDePerfilamiento} />
            </div>
          </div>
        )
      }
    </PrivateLayout >
  )
}
