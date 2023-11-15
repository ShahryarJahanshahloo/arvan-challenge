import { useAppSelector } from '../store/hooks'
import {
  selectContainerClassName,
  selectContent,
  selectVisible,
} from '../store/toastSlice'

const MyToast = () => {
  const isVisible = useAppSelector(selectVisible)
  const content = useAppSelector(selectContent)
  const ContainerClassName = useAppSelector(selectContainerClassName)

  if (isVisible === false) return null

  return <div className={`${ContainerClassName} fixed`}>{content}</div>
}

export default MyToast
