import React, { useContext, useEffect } from 'react'
import PropertyContext from '../context/Property/PropertyContext'
import PropertyCard from './PropertyCard';

const PropertyList = () => {
    const context = useContext(PropertyContext);
    const { properties } = context



    return (
        <>
            <div className='flex justify-center items-center mt-[100px]'>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        properties.map((item) => {
                            return (
                                <div key={item._id}>
                                    <PropertyCard propertyName={item.propertyName} price={item.price} propertyAddress={item.propertyAddress.address} city={item.propertyAddress.city} state={item.propertyAddress.state} propertyType={item.propertyType} rooms={item.rooms} toilets={item.toilets} />
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