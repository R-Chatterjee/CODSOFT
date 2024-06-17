import React, { useState } from 'react';

const Apply = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [cv, setCv] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleApply = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('cv', cv);
        try {
            const response = await fetch("http://localhost:5000/apply", {
                method: 'POST',
                body: formData
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setSuccessMessage('Applied successfully!');
            // Reset form fields if needed
        } catch (error) {
            console.error('Error applying for job:', error);
            // Handle error
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-green-50'>
    <div className="bg-white p-8 rounded-lg shadow-md">
        <form style={{ display: successMessage ? 'none' : 'block' }} onSubmit={handleApply} className="text-lg">
            <label htmlFor="fullName" className='block mb-2 text-emerald-700'>Full Name:</label>
            <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="block mb-4 border border-gray-300 rounded-md px-3 py-2" />

            <label htmlFor="email" className='block mb-2 text-emerald-700'>Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block mb-4 border border-gray-300 rounded-md px-3 py-2" />

            <label htmlFor="cv" className='block mb-2 text-emerald-700'>Upload CV:</label>
            <input type="file" id="cv" onChange={(e) => setCv(e.target.files[0])} accept=".pdf,.doc,.docx" required className="block mb-4 border border-gray-300 rounded-md px-3 py-2" />

            <button type="submit" className='block bg-green-800 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'>Submit</button>
        </form>

        <p style={{ display: successMessage ? 'block' : 'none' }}>{successMessage}</p>
    </div>
</div>

    );
};

export default Apply;
