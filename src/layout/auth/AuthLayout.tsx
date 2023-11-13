import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center w-full h-full p-5 rounded bg-grey-1 md:w-[450px] md:h-fit text-grey-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
