import React from 'react'
import RegisterForm from '../Components/RegisterForm'

function Register() {

  console.log("reRendered register")
  return (
    <div className='h-full w-full flex-center form__page'>
      <RegisterForm/>
    </div>
  )
}

export default Register