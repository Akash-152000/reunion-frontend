import React from 'react'
import Button from './Button'

const SearchTab = () => {
    return (
        <>
            <div className=' bg-white px-10 py-5'>
                <form className='flex items-center'>
                    <div className='flex flex-col px-5 py-2 border-r-2 '>
                        <label className='mb-2 text-[#868686]' htmlFor="city">City</label>
                        <select className='cursor-pointer font-bold' name="city" id="city">
                            <option value="none" selected disabled hidden>Select location</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="delhi">Delhi</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="kolkata">Kolkata</option>
                        </select>
                    </div>
                    <div className='flex flex-col px-5 py-2 border-r-2'>
                        <label className='mb-2 text-[#868686]' htmlFor="city">Available from</label>
                        <input className='cursor-pointer font-bold' type="date" />
                    </div>
                    <div className='flex flex-col px-5 py-2 border-r-2'>
                        <label className='mb-2 text-[#868686]' htmlFor="city">Price</label>
                        <input className='cursor-pointer font-bold w-[200px]' type="range" id="price" name="vol" min="0" max="50" />
                    </div>
                    <div className='flex flex-col px-5 py-2 border-r-2'>
                        <label className='mb-2 text-[#868686]' htmlFor="city">City</label>
                        <select className='cursor-pointer font-bold' name="city" id="city">
                            <option value="mumbai">Mumbai</option>
                            <option value="delhi">Delhi</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="kolkata">Kolkata</option>
                        </select>
                    </div>
                    <div className='flex flex-col px-5 py-2 border-r-2'>
                        <label className='mb-2 text-[#868686]' htmlFor="city">Property type</label>
                        <select className='cursor-pointer font-bold' name="city" id="city">
                            <option value="none" selected disabled hidden>Select property type</option>
                            <option value="mumbai">1bhk</option>
                            <option value="delhi">2bhk</option>
                            <option value="Jaipur">3bhk</option>
                            <option value="kolkata">4bhk</option>
                        </select>
                    </div>
                    <div className='flex flex-col px-5 py-2  '>
                        <Button btnName="Search" />
                    </div>

                </form>

            </div>
        </>
    )
}

export default SearchTab