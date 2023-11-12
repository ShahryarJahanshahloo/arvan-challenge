import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-grow pt-5 pb-14 px-[30px] overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
