import React, { useContext, useEffect } from 'react'
import PropertyContext from '../context/Property/PropertyContext'
import PropertyCard from './PropertyCard';

const PropertyList = () => {
    const context = useContext(PropertyContext);
    const { properties } = context



    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        properties.map((item) => {
                            return (
                                <div key={item._id}>
                                    <PropertyCard propertyName={item.propertyName} price={item.price} propertyAddress={item.propertyAddress} city={item.city} state={item.state} propertyType={item.propertyType} toilets={item.toilets} />
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