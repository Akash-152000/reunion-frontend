import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropertyContext from '../context/Property/PropertyContext'

const UpdateProperty = () => {
    const { id } = useParams()
    const context = useContext(PropertyContext)
    const { getProperty, singleProperty } = context
    const { propertyName, propertyDescription, propertyAddress, availableFrom, price, propertyType, rooms, toilets, area, images, category, amenities } = singleProperty

    const [loading, setLoading] = useState(true)
    const [editPropertyName, setEditPropertyName] = useState(false)
    const [editPropertyDescription, setEditPropertyDescription] = useState(false)
    const [editPropertyAddress, setEditPropertyAddress] = useState(false)
    const [editCity, setEditCity] = useState(false)
    const [editState, setEditState] = useState(false)
    const [editAvailableFrom, setEditAvailableFrom] = useState(false)
    const [editPrice, setEditPrice] = useState(false)
    const [editPropertyType, setEditPropertyType] = useState(false)
    const [editRooms, setEditRooms] = useState(false)
    const [editToilets, setEditToilets] = useState(false)
    const [editArea, setEditArea] = useState(false)
    const [editCategory, setEditCategory] = useState(false)
    const [editNearbyHospital, setEditNearbyHospital] = useState(false)
    const [editNearbySchool, setEditNearbySchool] = useState(false)
    const [editNearbyBusStation, setEditNearbyBusStation] = useState(false)
    const [editNearbyRailwayStation, setEditNearbyRailwayStation] = useState(false)

    const [credentials, setCredentials] = useState(
        {
            propertyName: '',
            propertyDescription: '',
            propertyAddress: {
                address: '',
                city: '',
                state: ''
            },
            availableFrom: '',
            price: '',
            propertyType: '',
            rooms: '',
            toilets: '',
            area: '',
            images: '',
            category: '',
            amenities: {
                nearbyHospital: '',
                nearbySchool: '',
                nearbyBusStation: '',
                nearbyRailwayStation: ''
            }
        })


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleEdit = (data) => {
        if (data === 'propertyName') {
            setEditPropertyName(!editPropertyName)
            setCredentials({ ...credentials, propertyName: '' });
        }
        if (data === 'propertyDescription') {
            setEditPropertyDescription(!editPropertyDescription)
            setCredentials({ ...credentials, propertyDescription: "" })
        }
        if (data === 'address') {
            setEditPropertyAddress(!editPropertyAddress)
            setCredentials({ ...credentials, address: '' });
        }
        if (data === 'city') {
            setEditCity(!editCity)
            setCredentials({ ...credentials, city: '' });
        }
        if (data === 'state') {
            setEditState(!editState)
            setCredentials({ ...credentials, state: '' });
        }
        if (data === 'availableFrom') {
            setEditAvailableFrom(!editAvailableFrom)
            setCredentials({ ...credentials, availableFrom: '' });
        }
        if (data === 'price') {
            setEditPrice(!editPrice)
            setCredentials({ ...credentials, price: "" })
        }
        if (data === 'propertyType') {
            setEditPropertyType(!editPropertyType)
            setCredentials({ ...credentials, propertyType: '' });
        }
        if (data === 'rooms') {
            setEditRooms(!editRooms)
            setCredentials({ ...credentials, rooms: '' });
        }
        if (data === 'toilets') {
            setEditToilets(!editToilets)
            setCredentials({ ...credentials, toilets: '' });
        }
        if (data === 'area') {
            setEditArea(!editArea)
            setCredentials({ ...credentials, area: '' });
        }
        if (data === 'category') {
            setEditCategory(!editCategory)
            setCredentials({ ...credentials, category: "" })
        }
        if (data === 'nearbyHospital') {
            setEditNearbyHospital(!editNearbyBusStation)
            setCredentials({ ...credentials, nearbyHospital: '' });
        }
        if (data === 'nearbySchool') {
            setEditNearbySchool(!editNearbySchool)
            setCredentials({ ...credentials, nearbySchool: '' });
        }
        if (data === 'nearbyBusStation') {
            setEditNearbyBusStation(!editNearbyBusStation)
            setCredentials({ ...credentials, nearbyBusStation: '' });
        }
        if (data === 'nearbyRailwayStation') {
            setEditNearbyRailwayStation(!editNearbyRailwayStation)
            setCredentials({ ...credentials, nearbyRailwayStation: '' });
        }





    }

    const handleSubmit = () => {

    }


    useEffect(() => {
        getProperty(id)

    }, [])


    if (!singleProperty) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <div className='flex justify-center font-semibold text-[34px] m-4'>
                {propertyName}
            </div>

            <div className='mx-6'>
                <form onSubmit={handleSubmit} >
                    <div className='flex'>
                        <div className='w-[20vw]'>
                            <div className='font-medium text-[#8d8c8c]'>
                                Property address:
                            </div>
                            <div>
                                {editPropertyName
                                    ?
                                    <div>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='propertyName'
                                            placeholder={propertyName}
                                            value={credentials.propertyName}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('propertyName')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        {propertyName} <span className='pl-2 cursor-pointer' onClick={() => setEditPropertyName(!editPropertyName)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='w-[40vw]'>
                            <div className='font-medium text-[#8d8c8c]'>
                                Property address:
                            </div>
                            <div>
                                {editPropertyDescription
                                    ?
                                    <div>
                                        <textarea
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[500px]"
                                            type="text"
                                            name='propertyDescription'
                                            placeholder={propertyDescription}
                                            value={credentials.propertyDescription}
                                            onChange={onChange}
                                            rows={5}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('propertyDescription')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        {propertyDescription}<span className='pl-2 cursor-pointer' onClick={() => setEditPropertyDescription(!editPropertyDescription)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className='w-[20vw]'>
                            <div className='font-medium text-[#8d8c8c]'>
                                Rent/Price:
                            </div>
                            <div>
                                {editPrice
                                    ?
                                    <div><b>Price: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='price'
                                            placeholder={price}
                                            value={credentials.price}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('price')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <i className="fa-solid fa-indian-rupee-sign"></i> {price}<span className='pl-2 cursor-pointer' onClick={() => setEditPrice(!editPrice)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }

                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>


                </form>
            </div>
            {/* <div className='w-[80vw]'>
                    
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeNTWRIdYwzousHtWl43i39K6LB6IEks17A&usqp=CAU" alt="" />
                    </div>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 w-full items-center'>
                        <div className='w-full mt-[40px]'>
                            <div className='flex justify-start'>
                                {editPropertyName
                                    ?
                                    <div><b>Property Name: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='propertyName'
                                            placeholder={propertyName}
                                            value={credentials.propertyName}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('propertyName')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Property Name:</b> {propertyName} <span className='pl-2 cursor-pointer' onClick={() => setEditPropertyName(!editPropertyName)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editPropertyDescription
                                    ?
                                    <div><b>Property Description: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='propertyDescription'
                                            placeholder={propertyDescription}
                                            value={credentials.propertyDescription}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('propertyDescription')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Property Description:</b> {propertyDescription}<span className='pl-2 cursor-pointer' onClick={() => setEditPropertyDescription(!editPropertyDescription)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }

                            </div>
                        </div>


                        <div className='w-full mt-[40px]'>
                            <div className='flex justify-around'>
                                {editPropertyAddress
                                    ?
                                    <div><b>Address: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='address'
                                            placeholder={propertyAddress.address}
                                            value={credentials.propertyAddress.address}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('address')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Address:</b> {propertyAddress.address} <span className='pl-2 cursor-pointer' onClick={() => setEditPropertyAddress(!editPropertyAddress)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editCity
                                    ?
                                    <div><b>City: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='city'
                                            placeholder={propertyAddress.city}
                                            value={credentials.propertyAddress.city}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('city')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>City:</b> {propertyAddress.city}<span className='pl-2 cursor-pointer' onClick={() => setEditCity(!editCity)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editState
                                    ?
                                    <div><b>State: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='state'
                                            placeholder={propertyAddress.state}
                                            value={credentials.propertyAddress.state}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('state')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>State:</b> {propertyAddress.state}<span className='pl-2 cursor-pointer' onClick={() => setEditState(!editState)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }

                            </div>
                        </div>



                        <div className='w-full mt-[40px]'>
                            <div className='flex justify-around'>
                                {editPrice
                                    ?
                                    <div><b>Price: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='price'
                                            placeholder={price}
                                            value={credentials.price}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('price')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Price:</b> {price}<span className='pl-2 cursor-pointer' onClick={() => setEditPrice(!editPrice)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editCategory
                                    ?
                                    <div><b>Category: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='category'
                                            placeholder={category}
                                            value={credentials.category}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('category')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Category:</b> {category}<span className='pl-2 cursor-pointer' onClick={() => setEditCategory(!editCategory)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='w-full mt-[40px]'>
                            <div className='flex justify-around'>
                                {editAvailableFrom
                                    ?
                                    <div><b>Available From: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='availableFrom'
                                            placeholder={availableFrom}
                                            value={credentials.availableFrom}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('availableFrom')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Available From:</b> {availableFrom}<span className='pl-2 cursor-pointer' onClick={() => setEditAvailableFrom(!editAvailableFrom)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editPropertyType
                                    ?
                                    <div><b>Property Type: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='propertyType'
                                            placeholder={propertyType}
                                            value={credentials.propertyType}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('propertyType')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Property Type:</b> {propertyType}<span className='pl-2 cursor-pointer' onClick={() => setEditPropertyType(!editPropertyType)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                            </div>
                        </div>



                        <div className='w-full mt-[40px]'>
                            <div className='flex justify-around'>
                                {editRooms
                                    ?
                                    <div><b>Rooms: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='rooms'
                                            placeholder={rooms}
                                            value={credentials.rooms}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('rooms')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Rooms:</b> {rooms} <span className='pl-2 cursor-pointer' onClick={() => setEditRooms(!editsetEditRooms)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editToilets
                                    ?
                                    <div><b>Toilets: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='toilets'
                                            placeholder={toilets}
                                            value={credentials.toilets}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('toilets')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Toilets:</b> {toilets}<span className='pl-2 cursor-pointer' onClick={() => setEditToilets(!editToilets)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editArea
                                    ?
                                    <div><b>Are: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='area'
                                            placeholder={area}
                                            value={credentials.area}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('area')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Area:</b> {area} sq.ft.<span className='pl-2 cursor-pointer' onClick={() => setEditArea(!editArea)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }

                            </div>
                        </div>



                        <div className='w-full mt-[40px]'>
                            <div className='flex justify-around'>
                                {editNearbyHospital
                                    ?
                                    <div><b>Nearby Hospital: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='nearbyHospital'
                                            placeholder={amenities.nearbyHospital}
                                            value={credentials.amenities.nearbyHospital}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbyHospital')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Nearby Hospital:</b> {amenities.nearbyHospital} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbyHospital(!editNearbyHospital)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editNearbySchool
                                    ?
                                    <div><b>Nearby School: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='nearbySchool'
                                            placeholder={amenities.nearbySchool}
                                            value={credentials.amenities.nearbySchool}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbySchool')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Nearby School:</b> {amenities.nearbySchool} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbySchool(!editNearbySchool)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editNearbyBusStation
                                    ?
                                    <div><b>Nearby BusStation: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='nearbyBusStation'
                                            placeholder={amenities.nearbyBusStation}
                                            value={credentials.amenities.nearbyBusStation}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbyBusStation')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Nearby BusStation:</b> {amenities.nearbyBusStation} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbyBusStation(!editNearbyBusStation)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }
                                {editNearbyRailwayStation
                                    ?
                                    <div><b>Nearby RailwayStation: </b>
                                        <input
                                            className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                            type="text"
                                            name='nearbyRailwayStation'
                                            placeholder={amenities.nearbyRailwayStation}
                                            value={credentials.amenities.nearbyRailwayStation}
                                            onChange={onChange}
                                            required
                                        /><span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbyRailwayStation')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                    </div>
                                    :
                                    <div>
                                        <b>Nearby RailwayStation:</b> {amenities.nearbyRailwayStation} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbyRailwayStation(!editNearbyRailwayStation)}><i className="fa-solid fa-pencil"></i> </span>
                                    </div>
                                }

                            </div>
                        </div>


                        {
                            credentials.name === "" && credentials.phone === "" && credentials.email === "" && credentials.address === "" ? <></>
                                : <button type='submit' className='mt-10 px-[40px] py-2 rounded-lg text-white bg-[#0073e1] hover:bg-[#1c344a]'>Update</button>
                        }
                    </form>

                </div> */}

        </div>
    )
}

export default UpdateProperty