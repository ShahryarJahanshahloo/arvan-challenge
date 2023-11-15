import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import DashboardLayout from './layout/dashboard/DashboardLayout'
import AuthLayout from './layout/auth/AuthLayout'

const DashboardAll = lazy(() => import('./pages/DashboardAll'))
const DashboardEdit = lazy(() => import('./pages/DashboardEdit'))
const DashboardNew = lazy(() => import('./pages/DashboardNew'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

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
        <Route path='/' element={<Navigate to='/login' replace />} />

        <Route element={<AuthLayout />}>
          <Route
            path='login'
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path='register'
            element={
              <Suspense>
                <Register />
              </Suspense>
            }
          />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route
            path='articles'
            element={
              <Suspense>
                <DashboardAll />
              </Suspense>
            }
          />
          <Route
            path='articles/edit/:slug'
            element={
              <Suspense>
                <DashboardEdit />
              </Suspense>
            }
          />
          <Route
            path='articles/create'
            element={
              <Suspense>
                <DashboardNew />
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </div>
  )
}

export default App
