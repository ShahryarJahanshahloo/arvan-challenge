import { AppThunk } from '../../store/store'
import { hide, show } from '../../store/toastSlice'

export const Toast =
  (content: React.ReactNode, containerClassName?: string): AppThunk =>
  async dispatch => {
    dispatch(show({ content, containerClassName }))
    await new Promise(resolve => setTimeout(resolve, 5000))
    dispatch(hide())
  }
