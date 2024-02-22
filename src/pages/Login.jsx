import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { PublicLayout } from '../layout/PublicLayout';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';

const initialUser = {
  username: '',
  password: ''
}

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);
  const { response, loading, error, fetchData } = useFetch();

  useEffect(() => {
    if (response) {
      localStorage.setItem('jwt', response.data.token);
      navigate(0);
    }
  }, [response, error])

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData('public/login', 'POST', {
      email: user.username,
      contrasena: user.password,
    });
  };

  return (
    <PublicLayout>
      <div className='text-center text-2xl font-bold mb-4'>
        Iniciar Sesión
      </div>
      <form onSubmit={handleSubmit} >
        <div className='flex flex-col'>
          <Input label='Usuario' type='email' name='username' placeholder='user@gmail.com' onChange={handleChange} />
          <Input label='Contraseña' type='password' name='password' placeholder='••••••••••' onChange={handleChange} />
          <button className='bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-full mt-7' type='submit'>
            {loading ? <div>Autenticando...</div> : <div>Autenticar</div>}
          </button>
          {error && <p className='text-red-600 text-center mt-3'>{error.data.message}</p>}
        </div>
      </form>
    </PublicLayout>

  )
};
