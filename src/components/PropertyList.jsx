import React, { useContext, useEffect } from 'react'
import PropertyContext from '../context/Property/PropertyContext'
import PropertyCard from './PropertyCard';

const PropertyList = () => {
    const context = useContext(PropertyContext);
    const { properties } = context



    return (
        <>
            <div className='flex justify-center items-center mt-[100px]'>
                <div className='grid grid-cols-5 gap-6'>
                    {
                        properties.map((item) => {
                            return (
                                <div key={item._id}>
                                    {console.log(properties)}
                                    <PropertyCard id={item._id} propertyName={item.propertyName} price={item.price} address={item.address} city={item.city} state={item.state} propertyType={item.propertyType} rooms={item.rooms} toilets={item.toilets} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PropertyList