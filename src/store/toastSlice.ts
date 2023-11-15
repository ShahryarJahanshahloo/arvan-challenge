import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ToastState {
  content?: React.ReactNode
  isVisible: boolean
  containerClassName?: string
}

const initialState: ToastState = {
  content: undefined,
  isVisible: false,
  containerClassName: undefined,
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    show: (
      state,
      action: PayloadAction<{
        content: React.ReactNode
        containerClassName?: string
      }>
    ) => {
      state.content = action.payload.content
      state.containerClassName = action.payload.containerClassName
      state.isVisible = true
    },
    hide: state => {
      state.content = undefined
      state.isVisible = false
      state.containerClassName = undefined
    },
  },
})

export const { hide, show } = toastSlice.actions

export const selectContent = (state: RootState) => state.toast.content
export const selectVisible = (state: RootState) => state.toast.isVisible
export const selectContainerClassName = (state: RootState) =>
  state.toast.containerClassName

export default toastSlice.reducer
