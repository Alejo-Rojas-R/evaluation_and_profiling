import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { About } from '../pages/private/About'
import { HowToUse } from '../pages/private/HowToUse';
import { Applicants } from '../pages/private/Applicants';
import { Trainings } from '../pages/private/Trainings';
import { Credits } from '../pages/private/Credits';
import { Dashboard } from '../pages/private/Dashboard';
import { Applicant } from '../pages/private/Applicant';
import { Users } from '../pages/private/Users';
import { NotFound } from '../pages/private/NotFound';

export const Routing = () => {
  const jwt = localStorage.getItem('jwt');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={jwt ? <Navigate to='/applicants' /> : <Login />} />
        <Route path='/about' element={!jwt ? <Navigate to='/' /> : <About />} />
        <Route path='/applicants' element={!jwt ? <Navigate to='/' /> : <Applicants />} />
        <Route path='/dashboard' element={!jwt ? <Navigate to='/' /> : <Dashboard />} />
        <Route path='/how-to-use' element={!jwt ? <Navigate to='/' /> : <HowToUse />} />
        <Route path='/trainings' element={!jwt ? <Navigate to='/' /> : <Trainings />} />
        <Route path='/credits' element={!jwt ? <Navigate to='/' /> : <Credits />} />
        <Route path='/users' element={!jwt ? <Navigate to='/' /> : <Users />} />
        <Route path='/applicants/applicant/:id' element={<Applicant />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
