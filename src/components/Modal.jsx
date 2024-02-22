import { useParams } from "react-router-dom";

export const Modal = ({ setModalProperties, acceptFunction }) => {
  const { id } = useParams();

  const handleConfirm = () => {
    acceptFunction(id);
  }

  const handleCancel = () => {
    setModalProperties(false);
  }

  return (
    <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center z-40'>
      <div className='absolute w-full h-full bg-zinc-900 opacity-65' />

      <div className='bg-white mx-auto rounded shadow-xl z-50 overflow-y-auto'>
        <div className='text-left p-6'>
          <div className='flex justify-between items-center pb-3'>
            <p className='text-2xl font-bold'>Confirmación</p>
          </div>
          <p>¿Esta seguro de que desea eliminar este aspirante?</p>

          <div className='mt-4 flex justify-end'>
            <button className='px-4 bg-gray-100 py-2 rounded-full text-black hover:bg-zinc-200'
              onClick={handleCancel}>Cancelar</button>
            <button className='px-4 bg-rose-700 py-2 ml-2 rounded-full text-white hover:bg-rose-600'
              onClick={handleConfirm}>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
