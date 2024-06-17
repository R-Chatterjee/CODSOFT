import React, { useState } from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"
const Banner = ({query,handleInputChange}) => {


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
        <h1 className='text-5xl font-bold text-primary mb-3'>Connecting
            <span className='text-green-500'> talent </span>with<span className='text-green-500'> opportunity </span>
        </h1>
        <p className='text-lg text-primary/80 mb-8'>Thousands of jobs in IT industry are waiting for you.</p>
        <form>
            <div className='flex justify-start md:flex-row flex-col md:gap-4 gap-4'>
                <div className='relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-800 md:w-1/2 w-full'>
                    <input type='text' name='title' id='title' placeholder='Job title' className='block flex-1 border-0 bg-transparent
                    py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none right-0 sm:text-primary  text-sm sm:leading-6'
                     onChange={handleInputChange} 
                     value={query}  
                    />
                    <FiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'/>
                </div>
                {/*
                <div className='relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-800 md:w-1/3 w-full'>
                    <input type='text' name='title' id='title' placeholder='Location' className='block flex-1 border-0 bg-transparent 
                    py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:outline-none right-0 sm:text-primary text-sm sm:leading-6' 
                    
                    />
                    <FiMapPin className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'/>
                </div>*/
                //<input type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={(e) => setSearchText(e.target.value)}/>
                //<button type='find-jobs' onClick={handleSearch} className='bg-green-800 py-2 px-8 text-white md:rounded-s-none rounded'>Find Jobs</button>
                }
            </div>
        </form>
    </div>
  )
}

export default Banner