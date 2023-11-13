import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ToastState {
  content?: React.ReactNode
  isVisible: boolean
}

const initialState: ToastState = {
  content: undefined,
  isVisible: false,
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<{ content: React.ReactNode }>) => {
      state.content = action.payload.content
      state.isVisible = true
    },
    hide: state => {
      state.content = undefined
      state.isVisible = false
    },
  },
})

export const { hide, show } = toastSlice.actions

export const selectContent = (state: RootState) => state.toast.content
export const selectVisible = (state: RootState) => state.toast.isVisible

export default toastSlice.reducer
