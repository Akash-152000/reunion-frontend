import React from 'react'

export default function ConfirmationModel({ isOpen, onCancel, onConfirm, message }) {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={onCancel}></div>
            <div className="bg-white rounded p-8 text-center relative">
                <span className="absolute top-2 right-2 cursor-pointer text-gray-600" onClick={onCancel}>&times;</span>
                <p>{message}</p>
                <div className="mt-4 flex justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={onCancel}>Cancel</button>
                    <button className="bg-red-500 text-white px-4 py-2" onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}
