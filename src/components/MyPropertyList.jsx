import React, { useContext, useState } from 'react'
import UpdateProperty from './UpdateProperty';
import { Link } from 'react-router-dom';
import PropertyContext from '../context/Property/PropertyContext';
import UserContext from '../context/User/UserContext';


function MyPropertyList({ id, propertyName, propertyAddress, availableFrom, price, propertyType, category, showConfirmation }) {

    const context = useContext(PropertyContext)
    const { deleteProperty } = context



    const handleDelete = (id) => {
        showConfirmation(id, propertyName)


    }

    return (
        <div>
            

            <div className='flex justify-between items-center w-auto border-[1px] border-[#7b7b7b] mx-2 my-4 px-2 py-4'>
                <div>{propertyName}</div>
                <div>{propertyType}</div>
                <div>{category}</div>
                <div>{price}</div>
                <Link to={`/property/${id}`}>
                    <button className=' px-[20px] py-2 rounded-lg text-white bg-[#33691e] hover:bg-[#1c344a]'>View</button>
                </Link>
                <Link to={`/property/${id}?update=true`}>
                    <button className=' px-[20px] py-2 rounded-lg text-white bg-[#0073e1] hover:bg-[#1c344a]'>Update</button>
                </Link>

                <button onClick={()=>handleDelete(id, propertyName)} className='px-[20px] py-2 rounded-lg text-white bg-red-500 hover:bg-[#1c344a]'>Delete</button>


            </div>
        </div>

    )
}

export default MyPropertyList