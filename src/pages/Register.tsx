import { NavLink } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'

const strings = {
  title: 'Register',
  redirect: 'Already Registered?',
  login: 'Login',
}

const Register = () => {
  return (
    <>
      <span className='text-[#707070] text-[47px]'>{strings.title}</span>
      <RegisterForm />
      <div className='flex w-full gap-[10px]'>
        <span>{strings.redirect}</span>
        <NavLink to='/login' className='font-bold'>
          {strings.login}
        </NavLink>
      </div>
    </>
  )
}

export default Register
