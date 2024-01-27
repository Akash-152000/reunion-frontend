import React, { useContext, useState, useEffect } from 'react'
import UserDetails from './UserDetails'
import AddProperty from './AddProperty'
import UserContext from '../context/User/UserContext'
import MyProperties from './MyProperties'
import { Link } from 'react-router-dom'

function MyProfile() {

    const context = useContext(UserContext)
    const { user} = context

    const [activeComponent, setActiveComponent] = useState('default')
    const [loading, setLoading] = useState(true)


    const showUserDetailsComponent = () => {
        setActiveComponent('userDetailsComponent');
    };

    const showAddPropertyComponent = () => {
        setActiveComponent('addPropertyComponent');
    };

    const showMyPropertiesComponent = () => {
        setActiveComponent('myPropertiesComponent');
    };

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
        <div className='bg-[#9fc5d8] h-[100vh] flex'>
            
            <div className='m-[20px] w-[20vw] '>
                <button onClick={showUserDetailsComponent} className='flex justify-center border py-[20px] hover:bg-[#abbbd4] w-[100%] cursor-pointer'>
                    Your Details
                </button>

                {user.user.role === 'owner' ? <Link to='/myproperties'> <button onClick={showMyPropertiesComponent} className='flex justify-center border w-[100%] py-[20px] hover:bg-[#abbbd4] cursor-pointer'>
                    My Properties
                </button> </Link> : <></>}

                {user.user.role === "owner" ? <Link to='/property/add'><button onClick={showAddPropertyComponent} className='flex justify-center w-[100%] border py-[20px] hover:bg-[#abbbd4] cursor-pointer'>
                    Add Property
                </button></Link> : <></>}




            </div>

            {activeComponent === 'default' && <UserDetails />}
            {activeComponent === 'userDetailsComponent' && <UserDetails />}
            {/* {activeComponent === 'myPropertiesComponent' && <MyProperties />} */}
            {/* {activeComponent === 'addPropertyComponent' && <AddProperty />} */}



        </div>
    )
}

export default MyProfile