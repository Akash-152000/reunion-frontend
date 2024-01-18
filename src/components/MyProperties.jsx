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

                                <MyPropertyList price={property.price} propertyName={property.propertyName} category={property.category} propertyType={property.propertyType}/>
                            </div>

                        )

                    })
                }


            </div>

        </div>
    )
}

export default MyProperties;