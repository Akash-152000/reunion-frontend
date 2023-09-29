import React, { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import UserContext from '../context/User/UserContext'

const Header = () => {
  const context = useContext(UserContext)
  const {token,logout} = context

  return (
    <>
      <div className='bg-[#f5f6f7] flex justify-around items-center py-4 fixed w-full z-40 '>
        <div className='text-3xl cursor-pointer font-bold'>Logo</div>
        <Link to='/'>
          <div className='cursor-pointer font-medium'>Home</div>
        </Link>
        {console.log(token)}
        {token=== ''?
        <div className='flex'>
          <Link to='/signup'>
          <button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]'>Signup</button>
          </Link>
          <Link to='/login'>
          <button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]'>Login</button>
          </Link>
        </div>
        :<button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]' onClick={()=>logout()}>Logout</button>}
      </div>
    </>
  )
}

export default Header