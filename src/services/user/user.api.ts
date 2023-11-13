import request from '../../lib/axios'
import type { UserType } from './user.entities'

export const apiLogin = async (body: { email: string; password: string }) => {
  const res = await request.post('/users/login', { user: body })
  return res.data.user as UserType
}

export const apiRegisterUser = async (body: {
  email: string
  password: string
  username: string
}) => {
  const res = await request.post('/users', { user: body })
  return res.data.user as UserType
}

export const apiUpdateUser = async (body: {
  email: string
  password: string
  username: string
  image: string
  bio: string
}) => {
  const res = await request.put('/users', { user: body })
  return res.data.user as UserType
}

export const apiGetUser = async () => {
  const res = await request.get('/user')
  return res.data.user as UserType
}
