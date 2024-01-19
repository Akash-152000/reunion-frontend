import React, { useContext } from 'react'
import PropertyContext from '../context/Property/PropertyContext';
import MyPropertyList from './MyPropertyList';

function MyProperties() {

    const context = useContext(PropertyContext)
    const { properties } = context


    return (
        <div className='border w-[80vw] m-1'>
            <div className=' flex justify-center border-b-[1px] font-semibold text-[24px] py-4'>My Properties</div>
            <div className=''>
                {
                    properties.map((property) => {
                        return (
                            <div key={property._id}>

                                <MyPropertyList id={property._id} propertyName={property.propertyName} propertyDescription={property.propertyDescription} propertyAddress={property.propertyAddress} availableFrom={property.availableFrom} price={property.price} propertyType={property.propertyType} rooms={property.rooms} toilets={property.toilets} area={property.area} images={property.images} category={property.category} amenities={property.amenities} />
                            </div>

                        )

                    })
                }


            </div>

        </div>
    )
}

export default MyProperties;