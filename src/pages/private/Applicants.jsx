import { useEffect, useState } from 'react';
import { PrivateLayout } from '../../layout/PrivateLayout'
import { useFetch } from '../../hooks/useFetch';
import { NavLink, useNavigate } from 'react-router-dom';
import { prettifyText } from '../../helpers/textFormatFunctions';
import { IoSearch } from "react-icons/io5";

export const Applicants = () => {
  const { response, loading, error, fetchData } = useFetch();
  const [document, setDocument] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData('private/listar_aspirantes', 'GET');
  }, []);

  if (loading) {
    return (
      <PrivateLayout title='Aspirantes'>
        Loading...
      </PrivateLayout>
    );
  }

  if (error) {
    return (
      <PrivateLayout title='Aspirantes'>
        {error.data.message}
      </PrivateLayout>
    );
  }

  const handleChange = ({ target }) => {
    setDocument(target.value);
  }

  const handleSearch = () => {
    fetchData(`private/listar_por_documento?documento=${document}`, 'GET');
  }

  return (
    <PrivateLayout title='Aspirantes'>
      <div className='my-5 flex'>
        <form onSubmit={handleSearch} className='flex w-full'>
          <input type='text' className='shadow appearance-none rounded-full py-2 px-3 text-black me-2 bg-senary' onChange={handleChange} value={document} placeholder='Numero de documento' />
          <button type='submit' className='bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full flex items-center' ><IoSearch className='me-2' /> Buscar</button>
        </form>
        {
          (response && response.data.length > 5) &&
          <nav aria-label='Page navigation example'>
            <ul className='flex items-center -space-x-px h-10 text-base'>
              <li>
                <a href='#' className='flex items-center justify-center px-4 h-10 text-white bg-tertiary hover:bg-secondary rounded-s-full'>
                  <span>Anterior</span>
                </a>
              </li>
              <li>
                <a href='#' className='flex items-center justify-center px-4 h-10 text-white bg-primary hover:bg-secondary'>1</a>
              </li>
              <li>
                <a href='#' className='flex items-center justify-center px-4 h-10 text-white bg-tertiary hover:bg-secondary'>2</a>
              </li>
              <li>
                <a href='#' className='flex items-center justify-center px-4 h-10 text-white bg-tertiary hover:bg-secondary rounded-e-full'>
                  <span>Siguiente</span>
                </a>
              </li>
            </ul>
          </nav>
        }
      </div>
      <div className='border border-senary rounded-2xl my-5 overflow-auto'>
        {
          response && response.data.length === 0 ?
            <div className='w-full flex flex-col justify-center min-h-96 bg-senary items-center '>
              <div >
                <IoSearch className='text-9xl text-zinc-500 mb-5' />
              </div>

              <p className='text-center'>
                No se encontraron resultados <br /> para esta busqueda.
              </p>
            </div>
            :
            <table className='w-full text-left text-gray-500'>
              <thead className='text-gray-700'>
                <tr>
                  <th scope='col' className='px-6 py-4'>
                    Tipo Documento
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Documento
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Nombre
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Estado Proceso
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Puntaje Test
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Programa
                  </th>
                  <th scope='col' className='px-6 py-4'>

                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  response?.data.map((item, value) => (
                    <tr key={value} className='odd:bg-senary even:bg-white'>
                      <td className='px-6 py-4'>
                        {prettifyText(item.tipoDocumento)}
                      </td>
                      <td className='px-6 py-4'>
                        {item.numDocumento}
                      </td>
                      <td className='px-6 py-4'>
                        {item.nombre}
                      </td>
                      <td className='px-6 py-4'>
                        {prettifyText(item.estadoAspirante)}
                      </td>
                      <td className='px-6 py-4'>
                        {item.validadorDeTestGorilla?.pruebaTerminada
                          ? item.validadorDeTestGorilla.puntajePromedio : 'Sin terminar'}
                      </td>
                      <td className='px-6 py-4'>
                        {prettifyText(item.programa)}
                      </td>
                      <td className='px-6 py-4'>
                        <NavLink to={`applicant/${item.id}`} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Detalles</NavLink>
                      </td>
                    </tr>
                  ))
                }
              </tbody>

            </table>
        }
      </div>
      {/*<button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Actualizar Estado de Pruebas</button>*/}
    </PrivateLayout>
  )
}
