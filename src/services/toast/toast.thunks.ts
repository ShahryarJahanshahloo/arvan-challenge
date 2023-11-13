import { AppThunk } from '../../store/store'
import { hide, show } from '../../store/toastSlice'

export const Toast =
  (content: React.ReactNode): AppThunk =>
  async dispatch => {
    dispatch(show({ content }))
    await new Promise(resolve => setTimeout(resolve, 5000))
    dispatch(hide())
  }
