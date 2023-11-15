import { NavigateFunction } from 'react-router-dom'
import { AppThunk } from '../../store/store'
import { removeUser, setUser } from '../../store/userSlice'
import { apiGetUser, apiLogin, apiRegisterUser } from './user.api'
import { Toast } from '../toast/toast.thunks'

export const Authenticate =
  (navigate: NavigateFunction): AppThunk =>
  async dispatch => {
    try {
      const token = localStorage.getItem('jwt')
      if (!token) return navigate('/login')
      const user = await apiGetUser()
      dispatch(
        setUser({
          ...user,
          image: user.image === null ? undefined : user.image,
        })
      )
    } catch (error) {
      localStorage.removeItem('jwt')
      navigate('/login')
    }
  }

export const Login =
  (
    creds: { email: string; password: string },
    navigate: NavigateFunction,
    toastComp: React.ReactElement,
    cb?: () => void
  ): AppThunk =>
  async dispatch => {
    try {
      const user = await apiLogin(creds)
      localStorage.setItem('jwt', user.token)
      dispatch(
        setUser({
          ...user,
          image: user.image === null ? undefined : user.image,
        })
      )
      navigate('/articles')
    } catch (error) {
      dispatch(Toast(toastComp, 'top-[30px] right-[30px]'))
      console.log(error)
    }
    if (cb) cb()
  }

export const Register =
  (
    body: { email: string; password: string; username: string },
    navigate: NavigateFunction,
    cb?: () => void
  ): AppThunk =>
  async dispatch => {
    try {
      const user = await apiRegisterUser(body)
      localStorage.setItem('jwt', user.token)
      dispatch(
        setUser({
          ...user,
          image: user.image === null ? undefined : user.image,
        })
      )
      navigate('/articles')
    } catch (error) {
      console.log(error)
    }
    if (cb) cb()
  }

export const Logout =
  (navigate: NavigateFunction): AppThunk =>
  async dispatch => {
    try {
      localStorage.removeItem('jwt')
      dispatch(removeUser())
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
