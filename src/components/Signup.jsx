import React, { useContext, useState } from 'react'
import UserContext from '../context/User/UserContext'

const Signup = () => {

  const context = useContext(UserContext)
  const { signup } = context

  const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", address: "", password: "", cPassword: "" })
  const [isOwner, setIsOwner] = useState(false)

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    setIsOwner(!isOwner)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(credentials, isOwner)
  }


  return (
    <>
      <div className='w-full bg-[#111827] flex justify-center items-center text-white'>
        <div className='w-[600px] mt-8 bg-[#1f2937] p-8 rounded-xl'>
          <div className='text-3xl font-bold mb-6 '>Create an account</div>
          <form onSubmit={handleSubmit}>

            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor="name">Name</label>
              <input
                className="rounded-lg bg-[#374151] border px-3 py-1"
                type="text"
                name='name'
                placeholder='Enter your name'
                value={credentials.name}
                onChange={onChange}
                required
              />
            </div>

            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor="name">Address</label>
              <input
                className="rounded-lg bg-[#374151] border px-3 py-1"
                type="text"
                name='address'
                placeholder="Address"
                value={credentials.address}
                onChange={onChange}
                required
              />
            </div>

            <div className='flex justify-between'>
              <div className='flex flex-col mb-4'>
                <label className='mb-2' htmlFor="name">Email</label>
                <input
                  className="rounded-lg bg-[#374151] border px-3 py-1"
                  type="email"
                  name='email'
                  placeholder='email@example.com'
                  value={credentials.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className='flex flex-col mb-4'>
                <label className='mb-2' htmlFor="name">Phone</label>
                <input
                  className="rounded-lg bg-[#374151] border px-3 py-1"
                  type="tel"
                  name='phone'
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  placeholder='10 digit phone number'
                  value={credentials.phone}
                  onChange={onChange}
                  required
                />
              </div>

            </div>

            <div className='flex flex-col mb-4'>
              <label className='mb-2' htmlFor="name">Password</label>
              <input
                className="rounded-lg bg-[#374151] border px-3 py-1"
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
                className="rounded-lg bg-[#374151] border px-3 py-1"
                type="password"
                name='cPassword'
                placeholder='Enter your password'
                value={credentials.cPassword}
                onChange={onChange}
              />
            </div>

            <div className='flex mb-4'>

              <label className='mb-2' htmlFor="name">Signup As:
                <div>
                  <input
                    className=""
                    type="radio"
                    name='isOwner'
                    checked={isOwner}
                    value={isOwner}
                    onChange={onChange}
                  />
                  <span className='px-3'>Owner</span>
                </div>
                <div>
                  <input
                    className=""
                    type="radio"
                    name='isOwner'
                    checked={!isOwner}
                    value={!isOwner}
                    onChange={onChange}
                  />
                  <span className='px-3'>User</span>
                </div>
              </label>

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