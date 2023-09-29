import React, { useContext, useState } from 'react'
import UserContext from '../context/User/UserContext'

const Signup = () => {

  const context = useContext(UserContext)
  const{signup} = context

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cPassword: "",isOwner:true })

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(credentials)
  }


  return (
    <>
      <div className='w-full h-[100vh] bg-[#111827] flex justify-center items-center text-white'>
        <div className='w-[400px] mt-8 bg-[#1f2937] p-8 rounded-xl'>
          <div className='text-3xl font-bold mb-6 '>Create an account</div>
          <form onSubmit={handleSubmit}>

            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor="name">Name</label>
              <input
                className="rounded-lg bg-[#374151] border px-3 py-2"
                type="text"
                name='name'
                placeholder='Enter your name'
                value={credentials.name}
                onChange={onChange}
              />
            </div>

            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor="name">Email</label>
              <input
                className="rounded-lg bg-[#374151] border px-3 py-2"
                type="email"
                name='email'
                placeholder='email@example.com'
                value={credentials.email}
                onChange={onChange}
              />
            </div>

            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor="name">Password</label>
              <input
                className="rounded-lg bg-[#374151] border px-3 py-2"
                type="password"
                name='password'
                placeholder='Enter your password'
                min={8}
                value={credentials.password}
                onChange={onChange}
              />
            </div>

            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor="name">Confirm Password</label>
              <input
                className="rounded-lg bg-[#374151] border px-3 py-2"
                type="password"
                name='cPassword'
                placeholder='Enter your password'
                value={credentials.cPassword}
                onChange={onChange}
              />
            </div>

            <div className='flex justify-center'>
              <button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]' type="submit">Create Account</button>

            </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default Signup