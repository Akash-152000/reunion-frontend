import React, { useContext, useState } from 'react'
import UserDetails from './UserDetails'
import AddProperty from './AddProperty'
import UpdateProperty from './UpdateProperty'
import UserContext from '../context/User/UserContext'

function MyProfile() {

    const context = useContext(UserContext)
    const { user } = context

    const [activeComponent, setActiveComponent] = useState('default')

    const showUserDetailsComponent = () => {
        setActiveComponent('userDetailsComponent');
    };

    const showAddPropertyComponent = () => {
        setActiveComponent('addPropertyComponent');
    };

    const showUpdatepropertyComponent = () => {
        setActiveComponent('updatepropertyComponent');
    };

    const [userDetailsStatus, setUserDetailsStatus] = useState(true)
    const [addPropertyStatus, setAddPropertyStatus] = useState(false)
    const [updatePropertyStatus, setUpdatePropertyStatus] = useState(false)



    return (
        <div className='bg-[#9fc5d8] h-[100vh] flex'>
            <div className='m-[20px] '>
                <button onClick={showUserDetailsComponent} className='flex justify-center border py-[20px] hover:bg-[#abbbd4] w-[300px] cursor-pointer'>
                    Your Details
                </button>
                {user.user.role === "owner" ? <button onClick={showAddPropertyComponent} className='flex justify-center border py-[20px] hover:bg-[#abbbd4]  w-[300px] cursor-pointer'>
                    Add Property
                </button> : <></>}

                {user.user.role === 'owner' ? <button onClick={showUpdatepropertyComponent} className='flex justify-center border py-[20px] hover:bg-[#abbbd4]  w-[300px] cursor-pointer'>
                    Update Your Propertes
                </button> : <></>}


            </div>

            {activeComponent === 'default' && <UserDetails />}
            {activeComponent === 'userDetailsComponent' && <UserDetails />}
            {activeComponent === 'addPropertyComponent' && <AddProperty />}
            {activeComponent === 'updatepropertyComponent' && <UpdateProperty />}



        </div>
    )
}

export default MyProfile