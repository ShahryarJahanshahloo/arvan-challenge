import { NavLink } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const strings = {
  title: 'LOGIN',
  redirect: "Don't have account?",
  register: 'Register Now',
}

const Login = () => {
  return (
    <>
      <span className='text-[#707070] text-[47px]'>{strings.title}</span>
      <LoginForm />
      <div className='flex w-full gap-[10px]'>
        <span>{strings.redirect}</span>
        <NavLink to='/register' className='font-bold'>
          {strings.register}
        </NavLink>
      </div>
    </>
  )
}

export default Login
