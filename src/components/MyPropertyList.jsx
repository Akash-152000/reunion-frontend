import React from 'react'

function MyPropertyList({ price, propertyName, category, propertyType }) {
  return (
    <div className='flex justify-between items-center w-auto border mx-2 my-4 px-2 py-4'>
        <div>{propertyName}</div> 
        <div>{propertyType}</div>
        <div>{category}</div>
        <div>{price}</div>
        <button className=' px-[20px] py-2 rounded-lg text-white bg-[#33691e] hover:bg-[#1c344a]'>Update</button>
        <button className=' px-[20px] py-2 rounded-lg text-white bg-red-500 hover:bg-[#1c344a]'>Delete</button>

    </div>
  )
}

export default MyPropertyList