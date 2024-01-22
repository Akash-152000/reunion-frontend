import React from 'react'
import { Link } from 'react-router-dom';


const PropertyCard = ({id, price, propertyName,address, city, state, propertyType, toilets, rooms }) => {
    return (
        <>

            <div className='w-[200px] '>
                {console.log( price, propertyName,address, city, state, propertyType, toilets, rooms )}
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeNTWRIdYwzousHtWl43i39K6LB6IEks17A&usqp=CAU" alt="" />
                </div>
                <div className='border-b-[2px] border-l-[2px] border-r-[2px] border-[#33691E] px-[20px] py-[20px]'>
                    <div className='flex justify-between'>
                        <div className='font-semibold text-[16px]'><i className="fa-solid fa-indian-rupee-sign"></i> {price}</div>
                        <div className='cursor-pointer'><i className="fa-solid fa-heart"></i></div>
                    </div>
                    <div className='flex my-2'>
                        <div className='font-semibold text-[16px]'>{propertyName}</div>
                    </div>
                    <div>
                        <div className='font-medium text-[#575656] text-[14px]'>{address}</div>
                        <div className='font-medium text-[#575656] text-[14px]'>{city}</div>
                        <div className='font-medium text-[#575656] text-[14px]'>{state}</div>
                    </div>
                    <div className='flex justify-between my-[20px] py-[10px] border-b-[1px] border-t-[1px] border-[#33691E]'>
                        <div>{rooms} <i className="fa-solid fa-bed" style={{ color: "#33691e" }}></i></div>
                        <div>{toilets} <i className="fa-solid fa-toilet" style={{ color: "#33691e" }}></i> </div>
                        <div>{propertyType} <i className="fa-solid fa-house" style={{ color: "#33691e" }}></i></div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <Link to={`/property/${id}`}>
                            <button className='mt-2 px-[40px] py-2 rounded-lg text-white bg-[#33691e] hover:bg-[#1c344a]'>View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyCard