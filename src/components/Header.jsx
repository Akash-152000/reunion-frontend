import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/User/UserContext'
import userImage from '../assets/userImage.jpg'
import Logo from '../assets/Blueorb-horizontal-logo.png'

const Header = () => {
  const context = useContext(UserContext)
  const { user, logout, isLoggedIn } = context

  return (
    <>
      <div className='bg-[#f5f6f7] flex justify-around items-center py-4 sticky top-0 w-full z-40 '>
        <img src={Logo} alt="" />
        <div className='flex w-[30%] justify-around'>
          <Link to='/'>
            <div className='cursor-pointer font-medium'>Home</div>
          </Link>
          <Link to='/about'>
            <div className='cursor-pointer font-medium'>About</div>
          </Link>
          <Link to='/contact'>
            <div className='cursor-pointer font-medium'>Contact</div>
          </Link>
          <Link to='/blogs'>
            <div className='cursor-pointer font-medium'>Blogs</div>
          </Link>
        </div>

        {!isLoggedIn ?
          <div className='flex'>
            <Link to='/signup'>
              <button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]'>Signup</button>
            </Link>
            <Link to='/login'>
              <button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]'>Login</button>
            </Link>
          </div>
          : <div className='flex w-auto justify-around items-center'>
            <button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]' onClick={() => logout()}>Logout</button>
            <Link to="/myprofile">
              <div className='flex items-center'>
                <div className='w-[50px] h-[50px] ml-[40px]' >
                  <img className='object-cover w-full h-full rounded-full border-black border-[1px] cursor-pointer' src={userImage} alt="Hero Image" />
                </div>
                <span className='pl-[20px]'>{user.user.name}</span>
              </div>
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default Header