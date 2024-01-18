import React, { useContext, useState } from 'react'
import UserDetails from './UserDetails'
import AddProperty from './AddProperty'
import UpdateProperty from './UpdateProperty'

function MyProfile() {
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
        <div className='bg-[#9fc5d8] flex'>
            <div className='m-[20px] '>
                <button onClick={showUserDetailsComponent} className='flex justify-center border py-[20px] hover:bg-[#abbbd4] w-[300px] cursor-pointer'>
                    Your Details
                </button>
                <button onClick={showAddPropertyComponent} className='flex justify-center border py-[20px] hover:bg-[#abbbd4]  w-[300px] cursor-pointer'>
                    Add Property
                </button>
                <button onClick={showUpdatepropertyComponent} className='flex justify-center border py-[20px] hover:bg-[#abbbd4]  w-[300px] cursor-pointer'>
                    Update Your Propertes
                </button>

            </div>

            {activeComponent === 'default'&& <UserDetails/>}
            {activeComponent === 'userDetailsComponent'&& <UserDetails/>}
            {activeComponent === 'addPropertyComponent'&& <AddProperty/>}
            {activeComponent === 'updatepropertyComponent'&& <UpdateProperty/>}



        </div>
    )
}

export default MyProfile