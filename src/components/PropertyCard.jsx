import React from 'react'

const PropertyCard = ({price, propertyName, propertyAddress,city,state,propertyType,toilets}) => {
  return (
    <>
        <div className='mt-6 rounded-lg border p-1'>
            <div className='flex justify-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeNTWRIdYwzousHtWl43i39K6LB6IEks17A&usqp=CAU"  alt="" />
            </div>
            <div className='px-3 mt-2'> 
                <p className='text-xl font-bold '>{propertyName}</p>
            </div>
            <div className='px-3 mt-2'>
                <p><i className="fa-solid fa-indian-rupee-sign " style={{"color": "#0073e1"}}></i><span className='font-bold text-[#0073e1]'>{price}</span>/month</p>
            </div>
            <div className='flex px-3 mt-2'>
                <p>{propertyAddress},{city},{state}</p>
            </div>
            <div className='flex px-3 mt-2 items-center justify-around'>
                <p><i className="fa-sharp fa-solid fa-house" style={{"color": "#0073e1"}}></i>{propertyType}</p>
                <p><i className="fa-solid fa-toilet" style={{"color": "#0073e1"}}></i>{toilets}</p>
            </div>
        </div>
    </>
  )
}

export default PropertyCard