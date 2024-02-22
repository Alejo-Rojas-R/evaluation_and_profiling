import { NavLink, useNavigate } from "react-router-dom";
import { menuOptions } from "../helpers/menuOptions";
import { MdLogout } from "react-icons/md";

export const PrivateLayout = ({ children, title = '' }) => {
  const navigate = useNavigate();

  const sortedMenuOptions = menuOptions.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
  })

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate(0);
  }

  return (
    <>
      <aside className='h-screen bg-tertiary text-white fixed top-0 left-0 w-80' >
        <div className='text-sm flex items-center p-6 bg-primary mb-5 shadow-md'>
          <img src='/brand.svg' className='me-2 h-5' />
          <div className='text-lg'>Evaluación y Perfilamiento</div>
        </div>
        <ul>
          {
            sortedMenuOptions.map((item, value) => (
              <NavLink key={value} to={`/${item.route}`}>
                {({ isActive }) => {
                  const Icon = item.icon;
                  return (
                    <li className={`flex items-center px-6 py-3 ${isActive ? 'bg-primary shadow-md' : 'hover:bg-secondary'}`}>
                      <div className='me-2'>{item.icon && <Icon />}</div> {item.title}
                    </li>
                  )
                }
                }
              </NavLink>
            ))
          }
        </ul>
      </aside >
      <div className='bg-white p-6 ml-80'>
        <div className='text-sm flex items-center justify-between mb-5'>
          {/*<img src='/brand.svg' className='me-2 h-5' />*/}
          <div className='text-2xl font-semibold'>{title}</div>
          <button className='flex items-center text-md font-semibold px-4' onClick={handleLogout}><MdLogout className='me-1' /> Cerrar Sesión </button>
        </div>
        {children}
      </div>
    </ >
  )
}
