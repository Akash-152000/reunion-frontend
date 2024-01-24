import React, { useContext, useState } from 'react';
import PropertyContext from '../context/Property/PropertyContext';
import MyPropertyList from './MyPropertyList';
import { useNavigate } from 'react-router-dom';
import ConfirmationModel from './ConfirmationModel';

function MyProperties() {
    const context = useContext(PropertyContext);
    const { properties, deleteProperty } = context;

    const navigate = useNavigate();

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('') 
    const [alertMessage, setAlertMessage] = useState(`Are you sure you want to delete this item`)

    const showConfirmation = (id, propertyName) => {
        setIsConfirmationOpen(true);
        setAlertMessage(`Are you sure you want to delete ${propertyName}`)
        setDeleteId(id)
    };

    const handleCancel = () => {
        setIsConfirmationOpen(false);
    };

    const handleConfirm = () => {
        deleteProperty(deleteId)
        setIsConfirmationOpen(false);
    };

    return (
        <div className='border bg-[#dadada] m-1'>
            <button onClick={() => navigate(-1)} className='absolute ml-[4%] mt-[5px] cursor-pointer '>
                <div className='p-2 rounded-full bg-[#0073e1] text-white'>
                    <i className="fa-solid fa-arrow-left-long fa-xl"></i>
                </div>
            </button>
            <div className='flex justify-center border-b-[1px] font-semibold text-[24px] py-4'>My Properties</div>
            
            <ConfirmationModel isOpen={isConfirmationOpen}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                message= {alertMessage} />
            <div className=''>
                {properties.map((property) => (
                    <div key={property._id}>
                        <MyPropertyList
                            id={property._id}
                            propertyName={property.propertyName}
                            propertyDescription={property.propertyDescription}
                            address={property.address}
                            city={property.city}
                            state={property.state}
                            availableFrom={property.availableFrom}
                            price={property.price}
                            propertyType={property.propertyType}
                            rooms={property.rooms}
                            toilets={property.toilets}
                            area={property.area}
                            images={property.images}
                            category={property.category}
                            nearbyHospital={property.nearbyHospital}
                            nearbySchool={property.nearbySchool}
                            nearbyBusStation={property.nearbyBusStation}
                            nearbyRailwayStation={property.nearbyRailwayStation}
                            showConfirmation={showConfirmation}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProperties;
