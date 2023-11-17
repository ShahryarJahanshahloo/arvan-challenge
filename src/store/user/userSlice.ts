import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserState {
  username?: string
  image?: string
}

const initialState: UserState = {
  username: undefined,
  image: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ username: string; image?: string }>
    ) => {
      state.username = action.payload.username
      state.image = action.payload.image
    },
    removeUser: state => {
      state.image = undefined
      state.username = undefined
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export const selectUsername = (state: RootState) => state.user.username

export default userSlice.reducer
