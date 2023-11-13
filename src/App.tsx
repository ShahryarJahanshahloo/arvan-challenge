import { Routes, Route, useNavigate } from 'react-router-dom'
import DashboardLayout from './layout/dashboard/DashboardLayout'
import DashboardAll from './pages/DashboardAll'
import DashboardEdit from './pages/DashboardEdit'
import DashboardNew from './pages/DashboardNew'
import AuthLayout from './layout/auth/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks'
import { Authenticate } from './services/user/user.thunks'
import MyToast from './components/MyToast'

function App() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(Authenticate(navigate))
  }, [])

  return (
    <div id='App'>
      <MyToast />
      <Routes>
        <Route path='/' element={<div className='bg-grey-1'>ok</div>} />

        <Route element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path='articles' element={<DashboardAll />} />
          <Route path='articles/edit' element={<DashboardEdit />} />
          <Route path='articles/create' element={<DashboardNew />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
