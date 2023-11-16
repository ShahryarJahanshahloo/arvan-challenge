import { useNavigate } from 'react-router-dom'
import { Logout } from '../../services/user/user.thunks'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectUsername } from '../../store/userSlice'
import MenuIcon from '../../components/MenuIcon'

const strings = {
  title: 'Arvan Challenge',
  logout: 'Logout',
  welcome: 'Welcome',
}

type Props = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const Header: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const username = useAppSelector(selectUsername)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(Logout(navigate))
  }

  return (
    <div className='h-[60px] bg-grey-6 text-white flex items-center md:pl-5 md:pr-10 px-2 shrink-0'>
      <span className='flex-shrink-0 block pr-2 md:hidden'>
        <MenuIcon isOpen={isSidebarOpen} onClick={toggleSidebar} />
      </span>
      <span className='text-[22px]'>{strings.title}</span>
      <span className='hidden pl-5 md:block'>
        {username ? strings.welcome + ' ' + username : strings.welcome}
      </span>
      <div className='flex justify-end flex-grow'>
        <button
          onClick={handleLogout}
          className='border rounded border-blue-2 text-blue-2 px-3 md:px-[19px] my-[10px] md:h-10 h-8'
        >
          {strings.logout}
        </button>
      </div>
    </div>
  )
}

export default Header
