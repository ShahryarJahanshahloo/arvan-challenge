import { NavigateFunction } from 'react-router-dom'
import { AppThunk } from '../store'
import { removeUser, setUser } from './userSlice'
import {
  apiGetUser,
  apiLogin,
  apiRegisterUser,
} from '../../services/user/user.api'
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
    toastComp: React.ReactElement
  ): AppThunk<Promise<void>> =>
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
  }

export const Register =
  (
    body: { email: string; password: string; username: string },
    navigate: NavigateFunction
  ): AppThunk<Promise<void>> =>
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
