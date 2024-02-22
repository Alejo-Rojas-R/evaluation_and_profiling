import { prettifyText } from "../helpers/textFormatFunctions";

export const EditableInput = ({ title, value, edit = false, onChange, name }) => {

  return (
    <div className='flex mb-2 items-center'>
      <label htmlFor={title} className='w-full block text-black font-semibold mb-21'>
        {title}:
      </label>
      <input
        className={`rounded-full py-2 w-full ${edit ? 'bg-white px-4 mx-2' : 'bg-senary px-2'}`}
        onChange={onChange}
        value={edit ? value : prettifyText(value)}
        disabled={!edit}
        name={name}
      />
    </div>
  )
}
