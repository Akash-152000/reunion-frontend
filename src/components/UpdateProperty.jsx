import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import PropertyContext from '../context/Property/PropertyContext'
import UserContext from '../context/User/UserContext'


const UpdateProperty = () => {
    const { id } = useParams()
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const toUpdate = queryParams.get('update') === 'true';

    const navigate = useNavigate()


    const context = useContext(PropertyContext)
    const { getProperty, singleProperty, updateProperty } = context
    const { propertyName, propertyDescription, address, city, state, availableFrom, price, propertyType, rooms, toilets, area, images, category, nearbyHospital, nearbyBusStation, nearbySchool, nearbyRailwayStation } = singleProperty

    const userContext = useContext(UserContext)
    const {showAlert} = userContext



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
            availableFrom: '',
            price: '',
            propertyType: '',
            rooms: '',
            toilets: '',
            area: '',
            images: '',
            category: '',
            address: '',
            city: '',
            state: '',
            nearbyHospital: '',
            nearbySchool: '',
            nearbyBusStation: '',
            nearbyRailwayStation: ''


        })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    };


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
            setCredentials({ ...credentials, address: "" })
        }
        if (data === 'city') {
            setEditCity(!editCity)
            setCredentials({ ...credentials, city: "" })
        }
        if (data === 'state') {
            setEditState(!editState)
            setCredentials({ ...credentials, state: "" })
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
            setEditNearbyHospital(!editNearbyHospital)
            setCredentials({ ...credentials, nearbyHospital: "" })
        }
        if (data === 'nearbySchool') {
            setEditNearbySchool(!editNearbySchool)
            setCredentials({ ...credentials, nearbySchool: "" })
        }
        if (data === 'nearbyBusStation') {
            setEditNearbyBusStation(!editNearbyBusStation)
            setCredentials({ ...credentials, nearbyBusStation: "" })
        }
        if (data === 'nearbyRailwayStation') {
            setEditNearbyRailwayStation(!editNearbyRailwayStation)
            setCredentials({ ...credentials, nearbyRailwayStation: "" })
        }





    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProperty(id, credentials)
        // showAlert("Property Details updated")
        window.location.reload();

    }

    const goBack=()=>{
        history.goBack();
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
            
                <button onClick={()=>navigate(-1)} className='absolute ml-[4%] mt-[5px] cursor-pointer '>
                    <div className='p-2 rounded-full bg-[#0073e1] text-white'>
                        <i className="fa-solid fa-arrow-left-long fa-xl"></i>
                    </div>
                </button>
            
            <div className='flex justify-center bg-[#dadada]'>

                <div className='mb-[100px]'>
                    <div className='flex justify-center font-semibold text-[34px] m-4 mb-[40px]'>
                        {propertyName}
                    </div>

                    <div className=' flex justify-center items-center w-[80vw] h-[30vh] border-dotted border-2 rounded-xl border-[#4f4f4f] mx-6'>
                        {
                            toUpdate ?
                                <div className=''>
                                    <div className='flex justify-center'><i className="fa-regular fa-image fa-2xl" style={{ color: '#8d8c8c', fontSize: '50px' }}></i></div>

                                    <div className='flex justify-center mt-[30px] font-medium text-[#8d8c8c]'>Upload an Image</div>
                                    <div className='flex justify-center mt-[10px]'>
                                        <input
                                            className=''
                                            type="file"
                                            accept="image/*"
                                            style={{ minWidth: '300px' }}
                                            // onChange={handleImageChange}
                                            multiple
                                        />
                                    </div>

                                </div>
                                : <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeNTWRIdYwzousHtWl43i39K6LB6IEks17A&usqp=CAU" alt="" />
                                </div>
                        }


                    </div>

                    <div className='mx-6'>
                        <form onSubmit={handleSubmit} >
                            <div className='flex mt-[40px]'>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Property Name:
                                    </div>
                                    <div>
                                        {editPropertyName
                                            ?
                                            <div>
                                                <input
                                                    className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[200px]"
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

                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            {propertyName}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditPropertyName(!editPropertyName)}>
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </span>
                                                        </div>
                                                        : <div>{propertyName}</div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>


                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Rent/Price:
                                    </div>
                                    <div>
                                        {editPrice
                                            ?
                                            <div>
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
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-indian-rupee-sign mr-4" style={{ color: "#33691e" }}></i>
                                                            {price}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditPrice(!editPrice)}>
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </span>
                                                        </div>
                                                        : <div>{price}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Category:
                                    </div>
                                    <div>
                                        {editCategory
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='category'
                                                    placeholder={category}
                                                    value={credentials.category}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="Rent">Rent</option>
                                                    <option value="Buy">Buy</option>

                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('category')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            {category}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditCategory(!editCategory)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{category}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Property Type:
                                    </div>
                                    <div>
                                        {editPropertyType
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='propertyType'
                                                    placeholder={propertyType}
                                                    value={credentials.propertyType}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="1bhk">1bhk</option>
                                                    <option value="2bhk">2bhk</option>
                                                    <option value="3bhk">3bhk</option>
                                                    <option value="4bhk">4bhk</option>
                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('propertyType')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-building mr-4" style={{ color: "#33691e" }}></i>  {propertyType}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditPropertyType(!editPropertyType)}>
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </span>
                                                        </div>
                                                        : <div>{propertyType}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>

                            <div className='mt-[60px]'>
                                <div className='w-[40vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Property Description:
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
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            {propertyDescription}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditPropertyDescription(!editPropertyDescription)}>
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </span>
                                                        </div>
                                                        : <div>{propertyDescription}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className='mt-[60px] flex'>
                                <div className='w-[30vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Property address:
                                    </div>
                                    <div>
                                        {editPropertyAddress
                                            ?
                                            <div>

                                                <input
                                                    className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='address'
                                                    placeholder={address}
                                                    value={credentials.address}
                                                    onChange={onChange}
                                                    required
                                                /><span className='cursor-pointer pl-2' onClick={() => handleEdit('address')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-address-book mr-4" style={{ color: "#33691e" }}></i>  {address}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditPropertyAddress(!editPropertyAddress)}>
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </span>
                                                        </div>
                                                        : <div>{address}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        City:
                                    </div>
                                    <div>
                                        {editCity
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='city'
                                                    placeholder={city}
                                                    value={credentials.city}
                                                    onChange={onChange}
                                                    required>
                                                    <option value="none" hidden>Select location</option>
                                                    <option value="mumbai">Mumbai</option>
                                                    <option value="delhi">Delhi</option>
                                                    <option value="Jaipur">Jaipur</option>
                                                    <option value="kolkata">Kolkata</option>
                                                </select>
                                                {/* <input

                                                /> */}
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('city')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            {city}<span className='pl-2 cursor-pointer' onClick={() => setEditCity(!editCity)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{city}</div>
                                                }


                                            </div>
                                        }

                                    </div>
                                </div>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        State:
                                    </div>
                                    <div>
                                        {editState
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='state'
                                                    placeholder={state}
                                                    value={credentials.state}
                                                    onChange={onChange}
                                                    required>
                                                    <option value="none" disabled hidden>Select location</option>
                                                    <option value="mumbai">Maharashtra</option>
                                                    <option value="delhi">Delhi</option>
                                                    <option value="Jaipur">Rajasthan</option>
                                                    <option value="kolkata">Bengal</option>
                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('state')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            {state}<span className='pl-2 cursor-pointer' onClick={() => setEditState(!editState)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{state}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>

                            <div className='mt-[60px] flex'>
                                <div className='w-[12vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Rooms:
                                    </div>
                                    <div>
                                        {editRooms
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[100px]"
                                                    type="text"
                                                    name='rooms'
                                                    placeholder={rooms}
                                                    value={credentials.rooms}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('rooms')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-bed mr-4" style={{ color: "#33691e" }}></i>
                                                            {rooms}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditRooms(!editRooms)}>
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </span>
                                                        </div>
                                                        : <div>{rooms}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                                <div className='w-[12vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Toilets:
                                    </div>
                                    <div>
                                        {editToilets
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[100px]"
                                                    type="text"
                                                    name='toilets'
                                                    placeholder={toilets}
                                                    value={credentials.toilets}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('toilets')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-toilet mr-4" style={{ color: "#33691e" }}></i>
                                                            {toilets}
                                                            <span className='pl-2 cursor-pointer' onClick={() => setEditToilets(!editToilets)}>
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </span>
                                                        </div>
                                                        : <div>{toilets}</div>
                                                }

                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className='w-[12vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Area:
                                    </div>
                                    <div>
                                        {editArea
                                            ?
                                            <div>
                                                <input
                                                    className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[100px]"
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
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-house mr-4" style={{ color: "#33691e" }}></i>{area} sq.ft.<span className='pl-2 cursor-pointer' onClick={() => setEditArea(!editArea)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{area} sq.ft. </div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Available From:
                                    </div>
                                    <div>
                                        {editAvailableFrom
                                            ?
                                            <div>
                                                <input
                                                    className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="date"
                                                    name='availableFrom'
                                                    placeholder={new Date(availableFrom).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                    value={credentials.availableFrom}
                                                    onChange={onChange}
                                                    required
                                                /><span className='cursor-pointer pl-2' onClick={() => handleEdit('availableFrom')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-regular fa-calendar-days mr-4" style={{ color: "#33691e" }}></i> {new Date(availableFrom).toLocaleDateString('en-GB', {
                                                                day: 'numeric',
                                                                month: 'long',
                                                                year: 'numeric'
                                                            })}<span className='pl-2 cursor-pointer' onClick={() => setEditAvailableFrom(!editAvailableFrom)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{new Date(availableFrom).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })}</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>

                            <div className='mt-[60px] flex'>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Nearby Hospital:
                                    </div>
                                    <div>
                                        {editNearbyHospital
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='nearbyHospital'
                                                    placeholder={nearbyHospital}
                                                    value={credentials.nearbyHospital}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbyHospital')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-hospital mr-4" style={{ color: "#33691e" }}></i> {nearbyHospital} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbyHospital(!editNearbyHospital)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{nearbyHospital} Km</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Nearby School:
                                    </div>
                                    <div>
                                        {editNearbySchool
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='nearbySchool'
                                                    placeholder={nearbySchool}
                                                    value={credentials.nearbySchool}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbySchool')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-school mr-4" style={{ color: "#33691e" }}></i>{nearbySchool} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbySchool(!editNearbySchool)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{nearbySchool} Km</div>
                                                }

                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Nearby Bus Station:
                                    </div>
                                    <div>
                                        {editNearbyBusStation
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='nearbyBusStation'
                                                    placeholder={nearbyBusStation}
                                                    value={credentials.nearbyBusStation}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                </select>
                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbyBusStation')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-bus mr-4" style={{ color: "#33691e" }}></i>{nearbyBusStation} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbyBusStation(!editNearbyBusStation)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{nearbyBusStation} Km</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className='mt-[60px] flex'>
                                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                                    <div className='font-medium text-[#8d8c8c]'>
                                        Nearby Railway Station:
                                    </div>
                                    <div>
                                        {editNearbyRailwayStation
                                            ?
                                            <div>
                                                <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                                    type="text"
                                                    name='nearbyRailwayStation'
                                                    placeholder={nearbyRailwayStation}
                                                    value={credentials.nearbyRailwayStation}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                </select>

                                                <span className='cursor-pointer pl-2' onClick={() => handleEdit('nearbyRailwayStation')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    toUpdate
                                                        ?
                                                        <div>
                                                            <i className="fa-solid fa-train mr-4" style={{ color: "#33691e" }}></i> {nearbyRailwayStation} Km<span className='pl-2 cursor-pointer' onClick={() => setEditNearbyRailwayStation(!editNearbyRailwayStation)}><i className="fa-solid fa-pencil"></i> </span>
                                                        </div>
                                                        : <div>{nearbyRailwayStation} Km</div>
                                                }

                                            </div>
                                        }

                                    </div>
                                </div>

                            </div>
                            {
                                credentials.propertyName === "" && credentials.propertyDescription === "" && credentials.address === "" && credentials.city === "" && credentials.state === "" && credentials.availableFrom === "" && credentials.price === "" && credentials.propertyType === "" && credentials.rooms === "" && credentials.toilets === "" && credentials.area === "" && credentials.category === "" && credentials.nearbyHospital === "" && credentials.nearbySchool === "" && credentials.nearbyBusStation === "" && credentials.nearbyRailwayStation === "" ? <></>
                                    : <button type='submit' className='mt-10 px-[40px] py-2 rounded-lg text-white bg-[#0073e1] hover:bg-[#1c344a]'>Update</button>
                            }
                        </form>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default UpdateProperty