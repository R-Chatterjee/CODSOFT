import React from 'react'
import {Link} from 'react-router-dom'
import {FiCalendar, FiClock, FiMapPin} from "react-icons/fi"
import {FaRupeeSign} from "react-icons/fa"

const Card = ({data}) => {
    const {_id, companyName, companyLogo, minPrice, maxPrice, salaryType, jobTitle, jobLocation, employmentType, postingDate, description} = data;

    // Determine if the job title includes "intern"
    const isIntern = jobTitle.toLowerCase().includes('intern');
    const formattedMinPrice = isIntern ? `${minPrice}K` : `${minPrice}L`;
    const formattedMaxPrice = isIntern ? `${maxPrice}K` : `${maxPrice}L`;

    return (
        <section className='card'>
            <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src={companyLogo} alt="Company Logo"/>
                <div>
                    <h4 className='text-primary mb-1'>{companyName}</h4>
                    <h3 className='text-primary text-lg font-semibold mb-2'>{jobTitle}</h3>
                    <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FiMapPin/> {jobLocation} </span>
                        <span className='flex items-center gap-2'><FiClock/> {employmentType} </span>
                        <span className='flex items-center gap-2'><FaRupeeSign/>{formattedMinPrice}-{formattedMaxPrice}</span>
                        <span className='flex items-center gap-2'><FiCalendar/> {postingDate} </span>
                    </div>

                    <p className='text-base text-primary/70'>{description}</p>
                </div>
            </Link>
        </section>
    )
}

export default Card
