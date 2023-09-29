import React from 'react'

const Button = ({btnName}) => {
    return (
        <div><button className='mx-2 px-4 py-2 rounded-lg text-white bg-[#0073e1]'>{btnName}</button></div>
    )
}

export default Button