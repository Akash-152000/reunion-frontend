import React, { useState, useEffect } from 'react';

const AlertModal = ({ isOpen, onClose, message }) => {

    useEffect(() => {
        let timeoutId;

        if (isOpen) {
            timeoutId = setTimeout(() => {
                onClose();
            }, 1000);
        }

        return () => clearTimeout(timeoutId);
    }, [isOpen, onClose]);

    if(!message) return null

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded p-8 text-center relative">
                <span className="absolute top-2 right-2 cursor-pointer text-gray-600" onClick={onClose}>&times;</span>
                <p>{message}</p>
                
            </div>
        </div>
    )
}

export default AlertModal;