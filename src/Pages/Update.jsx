import { useLoaderData, useParams } from 'react-router-dom'
import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import CreatableSelect from "react-select/creatable"

const Update = () => {
    const {id} = useParams();
    //console.log(id);
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,
    postingDate,experienceLevel,companyLogo,employmentType,description,postedBy,skills} = useLoaderData();
    const [selectedOption, setSelectedOption] = useState(null);
    const{
        register,
        handleSubmit,reset,
        formState: {errors },
    } = useForm()
    const onSubmit = (data) => {
        data.skills = selectedOption;
        //console.log(data);
        fetch(`http://localhost:5000/update-job/${id}`, {
            method: "PATCH",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json()).then((result) => {
            console.log(result);
            if (result.acknowledged === true ){
                alert("Job Updated Successfully")
            }
            reset()
        });
    }
    
    const options = [
        {value:"JavaScript", label: "JavaScript"},
        {value:"C++", label: "C++"},
        {value:"HTML", label: "HTML"},
        {value:"CSS", label: "CSS"},
        {value:"React", label: "React"},
        {value:"NodeJs", label: "NodeJs"},
        {value:"MongoDB", label: "MongoDB"},
        {value:"Redux", label: "Redux"},
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl: px-24 px-4'>
        {/*form*/}
        <div className='bg-green-50 py-10 px-4 lg:px-16'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <p className='text-primary'>Note: If intern,salary will be considered in 'K' (eg: 100K) otherwise in 'L'(eg: 1L).</p>
                {/*1st row*/}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Job Title</label>
                        <input type='text' defaultValue={jobTitle}
                        {...register("jobTitle")} className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Company Name</label>
                        <input type='text' placeholder='Ex: Microsoft' defaultValue={companyName}
                        {...register("companyName")} className='create-job-input'/>
                    </div>
                </div>

                {/*2nd row*/}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Minimum Salary</label>
                        <input type='text' placeholder='2' defaultValue={minPrice}
                        {...register("minPrice")} className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Maximum Salary</label>
                        <input type='text' placeholder='20' defaultValue={maxPrice}
                        {...register("maxPrice")} className='create-job-input'/>
                    </div>
                </div>

                {/*3rd row*/}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Salary type</label>
                        <select {...register("Salary Type")} className="create-job-input">
                            <option value={salaryType}>{salaryType}</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Job Location</label>
                        <input type='text' placeholder='Bangalore' defaultValue={jobLocation}
                        {...register("jobLocation")} className='create-job-flex'/>
                    </div>
                </div>

                {/*4th row*/}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Job Posting Date</label>
                        <input type='date' placeholder='2024-06-01' defaultValue={postingDate}
                        {...register("postingDate")} className='create-job-flex'/>
                    </div>    
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Experience Level</label>
                        <select {...register("experienceLevel")} className="create-job-input">
                            <option value={experienceLevel}>{experienceLevel}</option>
                            <option value="Any Experience">Any Experience</option>
                            <option value="Internship">Internship</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Work remotely">Work remotely</option>
                        </select>
                    </div>

                </div>

                {/* 5th row */}
                <div>
                <label className='block mb-2 text-lg text-emerald-600'>Required Skill Sets</label>   
                <CreatableSelect 
                    defaultValue={skills}
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                    className='create-job-input py-4'
                />
                </div>

                {/* 6th row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Company Logo</label>
                        <input type='url' placeholder='Your Company logo URL:https://weshare.com/imgl ' defaultValue={companyLogo}
                        {...register("companyLogo")} className='create-job-flex'/>
                    </div>    
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-emerald-600'>Employment Type</label>
                        <select {...register("employmentType")} className="create-job-input">
                            <option value={employmentType}>{employmentType}</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                        </select>
                    </div>

                </div>

                {/* 7th row */}
                <div className='w-full'>
                <label className='block mb-2 text-lg text-emerald-600'>Job Description</label>
                <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-grey-700'
                rows={6}
                defaultValue={description}
                placeholder='Job Description'
                 {...register("description")}/>
                </div>

                {/* last row */}
                <div className='w-full'>
                <label className='block mb-2 text-lg text-emerald-600'>Job Posted by</label>   
                <input type='email' placeholder='your email' defaultValue={postedBy}
                        {...register("postedBy")} className='create-job-flex'/>
                </div>

                <input type='submit' className='block mt-12 bg-green-800 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
            </form>
        </div>
    </div>
  )
}

export default Update