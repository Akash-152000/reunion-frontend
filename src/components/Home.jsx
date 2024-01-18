import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import SearchTab from './SearchTab'
import Header from './Header'
import PropertyList from './PropertyList'

const Home = () => {
    
    return (
        <>
            <div className='w-100 h-[100vh]'>
                <img className='object-cover w-full h-full' src={heroImage} alt="Hero Image" />

                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70'>
                    <div className='flex flex-col items-center'>
                        <p className='text-white text-[50px] mb-[100px]'>Find your Dream Home</p>
                        <SearchTab />
                    </div>
                </div>
                <PropertyList/>
            </div>

        </>
    )
}

export default Home