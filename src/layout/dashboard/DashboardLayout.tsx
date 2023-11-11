import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

type Props = {
  // children: React.ReactNode
}

const DashboardLayout: React.FC<Props> = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-grow'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
