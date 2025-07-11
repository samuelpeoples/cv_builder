import { useEffect, useState } from "react";

// Helper to create a new Role entry with unique id and empty fields
function createRole() {
    return {
        id: crypto.randomUUID(),
        title: "",
        periodStart: "",
        periodEnd: "",
        current: "",
        company: "",
        description: "",
    };
}

export default function Roles() {
    // Initialize RolesArr state from localStorage if available, otherwise start with one empty Role
    const [RolesArr, setRolesArr] = useState(() => {
        const saved = localStorage.getItem("RolesArr");
        if (saved) return JSON.parse(saved);
        return [createRole()];
    });

    // Persist RolesArr to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("RolesArr", JSON.stringify(RolesArr));
        window.dispatchEvent(new Event("storageUpdate"));
    }, [RolesArr]);

    // Update the value of a specific field for a specific Role entry
    function handleRoleChange(index, field, value) {
        const updated = [...RolesArr];
        if (field === "current") {
            if (value) {
                updated[index].periodEnd = "Current";
            } else {
                updated[index].periodEnd = "";
            }
        }
        updated[index] = { ...updated[index], [field]: value };
        setRolesArr(updated);
    }

    // Add a new empty Role to the list
    function addRole() {
        setRolesArr([...RolesArr, createRole()]);
    }

    function deleteRole(index) {
        const firstHalf = RolesArr.slice(0, index);
        const secondHalf = RolesArr.slice(index + 1);
        const updated = firstHalf.concat(secondHalf);
        setRolesArr(updated);

        // setSkillsArr(skillsArr => (skillsArr.filter((_, i) => i !== index)));
    }

    return (
        <fieldset id='detailSet'>
            <legend>Prior Experience</legend>
            {RolesArr.map((Role, index) => (
                <div className='roleDetails' key={Role.id}>
                    <hr />
                    <div>
                        <label htmlFor={`roleCurrent${index}`}>Current Role:</label>
                        <input
                            type='checkbox'
                            name={`roleCurrent${index}`}
                            id={`roleCurrent${index}`}
                            checked={Role.current}
                            onChange={(e) => handleRoleChange(index, "current", e.target.checked)}
                        />
                    </div>
                    <div>
                        <label htmlFor={`roleTitle${index}`}>Title:</label>
                        <input
                            type='text'
                            name={`roleTitle${index}`}
                            id={`roleTitle${index}`}
                            value={Role.title}
                            onChange={(e) => handleRoleChange(index, "title", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`roleCompany${index}`}>Company:</label>
                        <input
                            type='text'
                            name={`roleCompany${index}`}
                            id={`roleCompany${index}`}
                            value={Role.company}
                            onChange={(e) => handleRoleChange(index, "company", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor={`roleStart${index}`}>Start Date:</label>
                        <input
                            type='date'
                            name={`roleStart${index}`}
                            id={`roleStart${index}`}
                            value={Role.periodStart}
                            onChange={(e) => handleRoleChange(index, "periodStart", e.target.value)}
                            required
                        />
                    </div>
                    {!Role.current ? (
                        <div>
                            <label htmlFor={`roleEnd${index}`}>End Date:</label>
                            <input
                                type='date'
                                name={`roleEnd${index}`}
                                id={`roleEnd${index}`}
                                value={Role.periodEnd}
                                onChange={(e) => handleRoleChange(index, "periodEnd", e.target.value)}
                                required
                            />
                        </div>
                    ) : (
                        <div>
                            <label htmlFor={`roleEnd${index}`}>End Date:</label>
                            <span style={{ marginLeft: "8px" }}>Current</span>
                        </div>
                    )}
                    <div>
                        <label htmlFor={`roleDesc${index}`}>Description:</label>
                        <textarea
                            type='text'
                            name={`roleDesc${index}`}
                            id={`roleDesc${index}`}
                            value={Role.description}
                            onChange={(e) => handleRoleChange(index, "description", e.target.value)}
                            required
                        />
                    </div>
                    <button type='button' className='deleteButton' onClick={(e) => deleteRole(index)}>
                        X
                    </button>
                </div>
            ))}
            <button type='button' className='addRoleButton' name='addRoleButton' onClick={addRole}>
                Add prior Role
            </button>
        </fieldset>
    );
}
