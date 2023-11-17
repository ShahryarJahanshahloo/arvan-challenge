import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { useCallback, useState } from 'react'

const DashboardLayout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleSidebar = useCallback(() => {
    setMenuOpen(state => !state)
  }, [])

  const closSidebar = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header isSidebarOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
      <div className='flex h-full overflow-y-hidden'>
        <Sidebar isOpen={isMenuOpen} closeSidebar={closSidebar} />
        <div className='flex-grow md:pt-6 md:px-[30px] pt-2 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
