import React from 'react'
import { FaEnvelopeOpen, FaRocket } from 'react-icons/fa'
import {} from 'react-icons/fa6'
const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold text-primary mb-2 flex item-center gap-2'>
                <FaEnvelopeOpen/>
                Email me for jobs
            </h3>
            <p className='text-primary/75 text-base mb-4'>Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>

            <div className='w-full space-y-4'>
                <input type='email' name='email'id='email'placeholder='Your Email Id'className='w-full block py-2 pl-3 border focus:outline-green-700'/>
                <input type='submit' value={'Subscribe'} className='w-full block py-2 pl-3 border focus:outline-none bg-green-700 rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>

        <div className='mt-20'>
            <h3 className='text-lg font-bold text-primary mb-2 flex item-center gap-2'>
                <FaRocket/>
                Get noticed faster
            </h3>
            <p className='text-primary/75 text-base mb-4'>Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>

            <div className='w-full space-y-4'>
                <input type='submit' value={'Upload resume'} className='w-full block py-2 pl-3 border focus:outline-none bg-green-700 rounded-sm text-white cursor-pointer font-semibold'/>
            </div>








        </div>
    </div>
    
  )
}

export default Newsletter