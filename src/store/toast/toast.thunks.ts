import { AppThunk } from '../store'
import { hide, show } from './toastSlice'

export const Toast =
  (content: React.ReactNode, containerClassName?: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(show({ content, containerClassName }))
      await new Promise(resolve => setTimeout(resolve, 5000))
      dispatch(hide())
    } catch (error) {
      console.log(error)
    }
  }
