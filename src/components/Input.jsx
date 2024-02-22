export const Input = ({ label, type, name, onChange, placeholder }) => {
  return (
    <div className='my-2'>
      <label htmlFor={name}
        className='block text-black text-sm font-bold mb-2 ms-4'
      >
        {label}
      </label>
      <input type={type} name={name} onChange={onChange} placeholder={placeholder}
        className='shadow-sm rounded-full w-full py-2 px-4 border'
      />
    </div>

  )
}
