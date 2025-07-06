import { useEffect, useState } from "react";

// Helper to create an empty details object
function createDetails() {
    return {
        fullName: "",
        title: "",
        dob: "",
        mobile: "",
        email: "",
        address: "",
    };
}

export default function Details() {
    // Initialize details state from localStorage or with empty fields
    const [detailsArr, setDetailsArr] = useState(() => {
        const saved = localStorage.getItem("detailsArr");
        if (saved) return JSON.parse(saved);
        return createDetails();
    });

    // Persist details to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("detailsArr", JSON.stringify(detailsArr));
        window.dispatchEvent(new Event("storageUpdate"));
    }, [detailsArr]);

    // Update a single field in the details object
    function handleChange(e) {
        const { name, value } = e.target;
        setDetailsArr(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <fieldset id='personalDetails'>
            <legend>Your Details</legend>
            <label htmlFor='fullName'>Name*</label>
            <input
                name='fullName'
                title="Full Name"
                className='personalInput'
                type='text'
                value={detailsArr.fullName}
                onChange={handleChange}
                required
            />

            <label htmlFor='title'>Current Title</label>
            <input
                name='title'
                title="Position Title"
                className='personalInput'
                type='text'
                value={detailsArr.title}
                onChange={handleChange}
            />

            <label htmlFor='dob'>Date of Birth</label>
            <input
                name='dob'
                title="Date of Birth"
                className='personalInput'
                type='date'
                value={detailsArr.dob}
                onChange={handleChange}
                
            />

            <label htmlFor='mobile'>Mobile*</label>
            <input
                name='mobile'
                title="Mobile Number"
                className='personalInput'
                type='tel'
                value={detailsArr.mobile}
                onChange={handleChange}
                required
            />

            <label htmlFor='email'>Email*</label>
            <input
                name='email'
                title="Email Address"
                className='personalInput'
                type='email'
                value={detailsArr.email}
                onChange={handleChange}
                required
            />

            <label htmlFor='address'>Location</label>
            <input
                name='address'
                title="Address"
                className='personalInput'
                type='text'
                value={detailsArr.address}
                onChange={handleChange}
            />
        </fieldset>
    );
}