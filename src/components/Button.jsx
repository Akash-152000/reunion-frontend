import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ btnName }) => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/signup')
    }

    return (
        <div><button onClick={handleNavigation} className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]'>{btnName}</button></div>
    )
}

export default Button;

