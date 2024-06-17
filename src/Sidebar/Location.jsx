import React, { useState, useEffect } from 'react';
import Input from '../Components/Input';
import jobsData from '../../public/jobs.json';

const Location = ({ handleChange }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Extract unique locations from job data
        const uniqueLocations = [...new Set(jobsData.map(job => job.jobLocation))];
        setLocations(uniqueLocations);
    }, []);

    return (
        <div>
            <h4 className='text-emerald-600 text-lg font-medium mb-2'>Location</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type='radio' name='location' value="" onChange={handleChange} />
                    <span className='checkmark'></span>
                    <span className='text-emerald-800'>All</span>
                </label>
                {locations.map(location => (
                    <Input key={location} handleChange={handleChange} value={location} title={location} name="location" />
                ))}
            </div>
        </div>
    );
}

export default Location;
