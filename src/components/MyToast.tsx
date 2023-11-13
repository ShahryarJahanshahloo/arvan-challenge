import { useAppSelector } from '../store/hooks'
import { selectContent, selectVisible } from '../store/toastSlice'

const MyToast = () => {
  const isVisible = useAppSelector(selectVisible)
  const content = useAppSelector(selectContent)

  if (isVisible === false) return null

  return <div className='fixed top-[30px] right-[30px]'>{content}</div>
}

export default MyToast
