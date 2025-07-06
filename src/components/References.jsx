import { useEffect, useState } from "react";

// Helper to create a new References entry with unique id and empty fields
function createReference() {
    return {
        id: crypto.randomUUID(),
        name: "",
        title: "",
        company: "",
        mobile: "",
        email: "",
    };
}

export default function References() {
    // Initialize ReferencesArr state from localStorage if available, otherwise start with one empty References
    const [ReferencesArr, setReferencesArr] = useState(() => {
        const saved = localStorage.getItem("ReferencesArr");
        if (saved) return JSON.parse(saved);
        return [createReference()];
    });

    // Persist ReferencesArr to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("ReferencesArr", JSON.stringify(ReferencesArr));
        window.dispatchEvent(new Event("storageUpdate"));
    }, [ReferencesArr]);

    // Update the value of a specific field for a specific References entry
    function handleReferenceChange(index, field, value) {
        const updated = [...ReferencesArr];
        updated[index] = { ...updated[index], [field]: value };
        setReferencesArr(updated);
    }

    // Add a new empty References to the list
    function addReference() {
        setReferencesArr([...ReferencesArr, createReference()]);
    }

    function deleteReference(index) {
        const firstHalf = ReferencesArr.slice(0, index);
        const secondHalf = ReferencesArr.slice(index + 1);
        const updated = firstHalf.concat(secondHalf);
        setReferencesArr(updated);

        // setSkillsArr(skillsArr => (skillsArr.filter((_, i) => i !== index)));
    }

    return (
        <fieldset id='detailSet'>
            <legend>References</legend>
            {ReferencesArr.map((References, index) => (
                <div className='roleDetails' key={References.id}>
                    <hr />
                    <div>
                        <label htmlFor={`refName${index}`}>Name:</label>
                        <input
                            type='text'
                            title="Reference Name"
                            name={`refName${index}`}
                            id={`refName${index}`}
                            value={References.name}
                            onChange={(e) => handleReferenceChange(index, "name", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`refTitle${index}`}>Title:</label>
                        <input
                            type='text'
                            title="Reference Title"
                            name={`refTitle${index}`}
                            id={`refTitle${index}`}
                            value={References.title}
                            onChange={(e) => handleReferenceChange(index, "title", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`refCompany${index}`}>Company:</label>
                        <input
                            type='text'
                            title="Reference Company"
                            name={`refCompany${index}`}
                            id={`refCompany${index}`}
                            value={References.company}
                            onChange={(e) => handleReferenceChange(index, "company", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`refMobile${index}`}>Mobile:</label>
                        <input
                            type='tel'
                            title="Reference Mobile"
                            name={`refMobile${index}`}
                            id={`refMobile${index}`}
                            value={References.mobile}
                            onChange={(e) => handleReferenceChange(index, "mobile", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`refEmail${index}`}>Email:</label>
                        <input
                            type='email'
                            title="Reference Email"
                            name={`refEmail${index}`}
                            id={`refEmail${index}`}
                            value={References.email}
                            onChange={(e) => handleReferenceChange(index, "email", e.target.value)}
                            required
                        />
                    </div>
                    <button type='button' className='deleteButton' onClick={(e) => deleteReference(index)}>
                        X
                    </button>
                </div>
            ))}
            <button type='button' className='addRoleButton' name='addRoleButton' onClick={addReference}>
                Add References
            </button>
        </fieldset>
    );
}
