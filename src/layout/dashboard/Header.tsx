import { useNavigate } from 'react-router-dom'
import { Logout } from '../../services/user/user.thunks'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectUsername } from '../../store/userSlice'

const strings = {
  title: 'Arvan Challenge',
  logout: 'Logout',
  welcome: 'Welcome',
}

const Header = () => {
  const username = useAppSelector(selectUsername)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(Logout(navigate))
  }

  return (
    <div className='h-[60px] bg-grey-6 text-white flex items-center pl-5 pr-10'>
      <span className='text-[22px]'>{strings.title}</span>
      <span className='pl-5'>{`${strings.welcome} ${username}`}</span>
      <div className='flex justify-end flex-grow'>
        <button
          onClick={handleLogout}
          className='border rounded border-blue-2 text-blue-2 px-[18px] my-[10px] h-10'
        >
          {strings.logout}
        </button>
      </div>
    </div>
  )
}

export default Header
