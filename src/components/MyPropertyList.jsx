import React, { useState } from 'react'
import UpdateProperty from './UpdateProperty';
import { Link } from 'react-router-dom';

function MyPropertyList({ id, propertyName, propertyDescription, propertyAddress, availableFrom, price, propertyType, rooms, toilets, area, images, category, amenities }) {

    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true)





    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };
    // const handleSubmit = () => {

    // }

    return (
        <div className='flex justify-between items-center w-auto border mx-2 my-4 px-2 py-4'>
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
            <button className=' px-[20px] py-2 rounded-lg text-white bg-red-500 hover:bg-[#1c344a]'>Delete</button>


        </div>

    )
}

export default MyPropertyList