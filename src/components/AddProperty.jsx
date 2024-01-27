import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropertyContext from '../context/Property/PropertyContext'


const AddProperty = () => {

  const navigate = useNavigate()


  const context = useContext(PropertyContext)
  const { addProperty } = context






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




  const handleSubmit = (e) => {
    e.preventDefault()
    addProperty(credentials)
    navigate('/myproperties')
    showAlert("Property Added")
  }

  return (
    <div>

      <button onClick={() => navigate(-1)} className='absolute ml-[4%] mt-[5px] cursor-pointer '>
        <div className='p-2 rounded-full bg-[#0073e1] text-white'>
          <i className="fa-solid fa-arrow-left-long fa-xl"></i>
        </div>
      </button>

      <div className='flex justify-center bg-[#dadada]'>

        <div className='mb-[100px]'>
          <div className='flex justify-center font-semibold text-[34px] m-4 mb-[40px]'>
            Add Property
          </div>

          <div className=' flex justify-center items-center w-[80vw] h-[30vh] border-dotted border-2 rounded-xl border-[#4f4f4f] mx-6'>
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




          </div>

          <div className='mx-6'>
            <form onSubmit={handleSubmit} >
              <div className='flex mt-[40px]'>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Property Name:
                  </div>
                  <div>

                    <div>
                      <input
                        className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[200px]"
                        type="text"
                        name='propertyName'
                        placeholder={credentials.propertyName}
                        value={credentials.propertyName}
                        onChange={onChange}
                        required
                      />
                    </div>

                  </div>
                </div>


                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Rent/Price:
                  </div>
                  <div>

                    <div>
                      <input
                        className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="number"
                        name='price'
                        placeholder={credentials.price}
                        value={credentials.price}
                        onChange={onChange}
                        required
                      />
                    </div>


                  </div>
                </div>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Category:
                  </div>
                  <div>

                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='category'
                        placeholder={credentials.category}
                        value={credentials.category}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="rent">Rent</option>
                        <option value="buy">Buy</option>

                      </select>

                    </div>


                  </div>
                </div>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Property Type:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='propertyType'
                        placeholder={credentials.propertyType}
                        value={credentials.propertyType}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select property Type</option>
                        <option value="1bhk">1bhk</option>
                        <option value="2bhk">2bhk</option>
                        <option value="3bhk">3bhk</option>
                        <option value="4bhk">4bhk</option>
                      </select>
                    </div>

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
                    <div>
                      <textarea
                        className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[500px]"
                        type="text"
                        name='propertyDescription'
                        placeholder={credentials.propertyDescription}
                        value={credentials.propertyDescription}
                        onChange={onChange}
                        rows={5}
                        required
                      />
                    </div>

                  </div>
                </div>
              </div>
              <div className='mt-[60px] flex'>
                <div className='w-[30vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Property address:
                  </div>
                  <div>
                    <div>

                      <input
                        className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='address'
                        placeholder={credentials.address}
                        value={credentials.address}
                        onChange={onChange}
                        required
                      />
                    </div>


                  </div>
                </div>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    City:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='city'
                        placeholder={credentials.city}
                        value={credentials.city}
                        onChange={onChange}
                        required>
                        
                        <option value="" >Select city</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="kolkata">Kolkata</option>
                      </select>

                    </div>

                  </div>
                </div>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    State:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='state'
                        placeholder={credentials.state}
                        value={credentials.state}
                        onChange={onChange}
                        required>
                        <option value=" "  >Select State</option>
                        <option value="mumbai">Maharashtra</option>
                        <option value="delhi">Delhi</option>
                        <option value="Jaipur">Rajasthan</option>
                        <option value="kolkata">Bengal</option>
                      </select>

                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-[60px] flex'>
                <div className='w-[12vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Rooms:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[100px]"
                        type="text"
                        name='rooms'
                        placeholder={credentials.rooms}
                        value={credentials.rooms}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>

                    </div>


                  </div>
                </div>
                <div className='w-[12vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Toilets:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[100px]"
                        type="text"
                        name='toilets'
                        placeholder={credentials.toilets}
                        value={credentials.toilets}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select Toilets</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div className='w-[12vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Area:
                  </div>
                  <div>
                    <div>
                      <input
                        className="rounded-lg bg-[#ffffff] border px-3 py-2 w-[80px]"
                        type="number"
                        name='area'
                        placeholder={credentials.area}
                        value={credentials.area}
                        onChange={onChange}
                        required
                      /> sq.ft.
                    </div>

                  </div>
                </div>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Available From:
                  </div>
                  <div>
                    <div>
                      <input
                        className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="date"
                        name='availableFrom'
                        placeholder={new Date(credentials.availableFrom).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                        value={credentials.availableFrom}
                        onChange={onChange}
                        required
                      />
                    </div>

                  </div>
                </div>
              </div>

              <div className='mt-[60px] flex'>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Nearby Hospital:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='nearbyHospital'
                        placeholder={credentials.nearbyHospital}
                        value={credentials.nearbyHospital}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select> Km

                    </div>

                  </div>
                </div>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Nearby School:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='nearbySchool'
                        placeholder={credentials.nearbySchool}
                        value={credentials.nearbySchool}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select> Km

                    </div>

                  </div>
                </div>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Nearby Bus Station:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='nearbyBusStation'
                        placeholder={credentials.nearbyBusStation}
                        value={credentials.nearbyBusStation}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select> Km

                    </div>


                  </div>
                </div>
              </div>
              <div className='mt-[60px] flex'>
                <div className='w-[20vw] border-[#6b6b6b] mr-3 border-2 p-4 rounded-xl'>
                  <div className='font-medium text-[#8d8c8c]'>
                    Nearby Railway Station:
                  </div>
                  <div>
                    <div>
                      <select className="rounded-lg bg-[#ffffff] border px-3 py-2"
                        type="text"
                        name='nearbyRailwayStation'
                        placeholder={credentials.nearbyRailwayStation}
                        value={credentials.nearbyRailwayStation}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select> Km
                    </div>

                  </div>
                </div>

              </div>
              <button type='submit' className='mt-10 px-[40px] py-2 rounded-lg text-white bg-[#0073e1] hover:bg-[#1c344a]'>Update</button>

            </form>
          </div>

        </div>


      </div>

    </div>
  )
}

export default AddProperty