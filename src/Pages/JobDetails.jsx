import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    }, [])

  return (
    <div className=' h-screen xl:px-24 px-4 bg-green-50'>
      <h2 className='text-primary font-bold mb-2 pt-11'>JobID: {id}</h2>
      <h1 className='text-primary font-semibold mb-2'>{job.jobTitle}</h1>
      <h1 className='inline-block bg-green-700 border p-2 text-white rounded mr-4 mb-12'>{job.employmentType}</h1>
      <Link to="/apply">
        <button className='bg-green-800 px-6 py-2 text-white rounded mb-12'>
          Apply Now
        </button>
      </Link>
      {/*max-w-screen-2xl container mx-auto */}

      <div className="flex space-x-8">
        {/* Benefits Column */}
        <div className="w-1/3 mb-12">
          <h2 className="text-lg font-bold mb-4 text-primary">Benefits</h2>
            <ul className="text-primary list-disc list-inside">
              <li>Health insurance</li>
              <li>Employee discount</li>
              <li>Flexible spending account</li>
              <li>Paid time off</li>
              <li>Vision insurance</li>
            </ul>
          </div>
          
          {/* Outline Column */}
          <div className="w-1/3 mb-12">
            <h2 className="text-lg font-bold mb-4 text-primary">OutLine</h2>
            <p className="text-primary">
              It is a rapidly growing service company that has long been an industry leader in providing educational, 
              operational and technological support services to the post-secondary education sector. We put people first, 
              drive innovation, and do good in the community that we live and work in.
            </p>
            <p className="text-primary">
              This position entails joining a web design and development team called Academic Web Services.
            </p>
          </div>
          
          {/* Future Growth Column */}
          <div className="w-1/3 mb-12">
            <h2 className="text-lg font-bold mb-4 text-primary">Future Growth</h2>
            <p className="text-primary">
              An industry leader in providing educational, operational and technological support services 
              to the post-secondary education sector. We put people first, drive innovation, and do good in the 
              community that we live and work in.
            </p>
            <p className="text-primary">
              We're passionate about web design and development and are focused on delivering quality products to our 
              customers in a team setting driven by strong culture and a good working atmosphere. We are hiring web developers.
            </p>
          </div>
      </div>
    </div>
  )
}

export default JobDetails