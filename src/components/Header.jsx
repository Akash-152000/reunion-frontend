import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <div className='bg-[#f5f6f7] flex justify-around items-center py-4 fixed w-full z-40 opacity-80'>
            <div className='text-3xl cursor-pointer font-bold'>Logo</div>
            <div className='cursor-pointer font-medium'>Home</div>
            <div className='flex'>
                <Button btnName = "Signup"/>
                <Button btnName = "Login"/>
            </div>
        </div>
    </>
  )
}

export default Header