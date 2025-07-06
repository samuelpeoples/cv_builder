import { useEffect, useState } from "react";

// Helper function to create a new skill object with a unique id
function createSkill(value = "") {
    return {
        id: crypto.randomUUID(),
        value,
    };
}

export default function Skills() {
    // Initialize skillsArr state from localStorage if available, otherwise start with one empty skill
    const [skillsArr, setSkillsArr] = useState(() => {
        const saved = localStorage.getItem("skillsArr");
        if (saved) return JSON.parse(saved);
        return [createSkill()];
    });

    // Persist skillsArr to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("skillsArr", JSON.stringify(skillsArr));
        window.dispatchEvent(new Event("storageUpdate"));
    }, [skillsArr]);

    // Update the value of a skill at a specific index
    function handleSkillChange(index, value) {
        const updated = [...skillsArr];
        updated[index] = { ...updated[index], value };
        setSkillsArr(updated);
    }

    // Add a new empty skill to the list
    function addSkill() {
        setSkillsArr([...skillsArr, createSkill()]);
    }

    function deleteSkill(index) {
        const firstHalf = skillsArr.slice(0, index);
        const secondHalf = skillsArr.slice(index + 1);
        const updated = firstHalf.concat(secondHalf);
        setSkillsArr(updated);

        // setSkillsArr(skillsArr => (skillsArr.filter((_, i) => i !== index)));
    }

    return (
        <fieldset id='detailSet'>
            <legend>Skills</legend>
            <div>
                <ul className='roleDetails'>
                    {/* Render each skill input field */}
                    {skillsArr.map((skill, index) => (
                        <li key={skill.id}>
                            <div>
                                <label htmlFor={`skill${index}`}>Skill {index + 1}</label>
                                <input
                                    type='text'
                                    name={`skill${index}`}
                                    id={`skill${index}`}
                                    value={skill.value}
                                    onChange={(e) => handleSkillChange(index, e.target.value)}
                                    required
                                />
                                <button type='button' className='deleteButton' onClick={(e) => deleteSkill(index)}>
                                    X
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Button to add a new skill */}
            <button type='button' id='addRoleBtn' name='addRoleBtn' onClick={addSkill}>
                +
            </button>
        </fieldset>
    );
}
