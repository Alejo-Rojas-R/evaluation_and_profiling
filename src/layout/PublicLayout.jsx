import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const PublicLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
      navigate('/login');
    }
  }, [])

  return (
    <div className='h-screen bg-primary flex'>
      <div className='container m-auto justify-center items-center max-w-96 bg-white shadow-lg rounded-2xl pt-5 pb-10 px-5'>
        <div className='flex justify-center w-full mb-2'>
          <img src='/Logo-BeTek.svg' className='me-2 h-10' />
        </div>

        {children}
      </div>
    </div>
  )
}
