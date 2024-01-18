import React, { useContext, useEffect, useState } from 'react'
import userImage from '../assets/userImage.jpg'
import UserContext from '../context/User/UserContext'


function UserDetails() {

    const context = useContext(UserContext)
    const { user, updateUser } = context

    const [loading, setLoading] = useState(true)
    const [editName, setEditName] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editAddress, setEditAddress] = useState(false)



    const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", address: "" })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleEdit = (data)=>{
        if(data==='name'){
            setEditName(!editName)
            setCredentials({ ...credentials, name: '' });
        }
        if(data==='phone'){
            setEditPhone(!editPhone)
            setCredentials({...credentials,phone:""})
        }
        if(data==='email'){
            setEditEmail(!editEmail)
            setCredentials({...credentials,email:""})
        }
        if(data==='address'){
            setEditAddress(!editAddress)
            setCredentials({...credentials,address:""})
        }
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await updateUser(credentials)
        if(editName)setEditName(!editName)
        if(editPhone)setEditPhone(!editPhone)
        if(editEmail)setEditEmail(!editEmail)
        if(editAddress)setEditAddress(!editAddress)
        setCredentials({...credentials,name:'',phone:'',email:'',address:''})

    }

    useEffect(() => {
        if (user) {
            setLoading(false)
        }
    })

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className=' w-[80vw] border m-1'>
            <div className='mt-6 flex justify-center'>
                <div className=''>
                    <div className='w-[100px] h-[100px] '>
                        <img className='rounded-full' src={userImage} alt="" />
                    </div>
                    <span className='pt-2 cursor-pointer flex justify-center'><i className="fa-solid fa-pencil"></i> </span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='flex-col w-full items-center'>
                <div className='w-full mt-[40px]'>
                    <div className='flex justify-around'>
                        {editName
                            ?
                            <div><b>Name: </b>
                                <input
                                    className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                    type="text"
                                    name='name'
                                    placeholder={user.user.name}
                                    value={credentials.name}
                                    onChange={onChange}
                                    required
                                /><span className='cursor-pointer pl-2' onClick={() => handleEdit('name')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                            </div>
                            :
                            <div>
                                <b>Name:</b> {user.user.name} <span className='pl-2 cursor-pointer' onClick={() => setEditName(!editName)}><i className="fa-solid fa-pencil"></i> </span>
                            </div>
                        }
                        {editPhone
                            ?
                            <div><b>Phone: </b>
                                <input
                                    className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                    type="tel"
                                    name='phone'
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                    placeholder='10 digit phone number'
                                    value={credentials.phone}
                                    onChange={onChange}
                                    required
                                /><span className='cursor-pointer pl-2' onClick={() => handleEdit('phone')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                            </div>
                            :
                            <div>
                                <b>Phone:</b> {user.user.phone}<span className='pl-2 cursor-pointer' onClick={() => setEditPhone(!editPhone)}><i className="fa-solid fa-pencil"></i> </span>
                            </div>
                        }

                    </div>
                </div>
                <div className='w-full mt-[40px]'>
                    <div className='flex justify-around'>
                        {editEmail
                            ?
                            <div><b>Email: </b>
                                <input
                                    className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                    type="email"
                                    name='email'
                                    placeholder={user.user.email}
                                    value={credentials.email}
                                    onChange={onChange}
                                    required
                                /><span className='cursor-pointer pl-2' onClick={() => handleEdit('email')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                            </div>
                            :
                            <div>
                                <b>Email:</b> {user.user.email}<span className='pl-2 cursor-pointer' onClick={() => setEditEmail(!editEmail)}><i className="fa-solid fa-pencil"></i> </span>
                            </div>
                        }
                        {editAddress
                            ?
                            <div><b>Address: </b>
                                <input
                                    className="rounded-lg bg-[#ffffff] border px-3 py-2"
                                    type="text"
                                    name='address'
                                    placeholder="Address"
                                    value={credentials.address}
                                    onChange={onChange}
                                    required
                                /><span className='cursor-pointer pl-2' onClick={() => handleEdit('address')}><i className="fa-solid fa-circle-xmark fa-xl" style={{ color: 'red' }}></i></span>
                            </div>
                            :
                            <div>
                                <b>Address:</b> {user.user.address}<span className='pl-2 cursor-pointer' onClick={() => setEditAddress(!editAddress)}><i className="fa-solid fa-pencil"></i> </span>
                            </div>
                        }
                    </div>
                </div>
                {
                    credentials.name === "" && credentials.phone==="" && credentials.email==="" && credentials.address==="" ? <></>
                        : <button type='submit' className='mt-10 px-[40px] py-2 rounded-lg text-white bg-[#0073e1] hover:bg-[#1c344a]'>Update</button>
                }
            </form>
        </div>

    )
}

export default UserDetails