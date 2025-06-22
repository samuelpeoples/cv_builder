import { useEffect, useState } from "react";

function createSkill(value = "") {
    return { id: crypto.randomUUID(), value };
}

export default function Skills() {
    const [skillsArr, setSkillsArr] = useState(() => {
        const saved = localStorage.getItem("skillsArr");
        if (saved) return JSON.parse(saved);
        return [createSkill()];
    });

    useEffect(() => {
        localStorage.setItem("skillsArr", JSON.stringify(skillsArr));
    }, [skillsArr]);

    function handleSkillChange(index, value) {
        const updated = [...skillsArr];
        updated[index] = { ...updated[index], value };
        setSkillsArr(updated);
    }

    function addSkill() {
        setSkillsArr([...skillsArr, createSkill()]);
    }

    return (
        <fieldset id='roles'>
            <legend>Skills</legend>
            <div>
                <ul className='roleDetails'>
                    {skillsArr.map((skill, index) => (
                        <li key={skill.id}>
							{console.log(skill.id)}
                            <input
                                type='text'
                                name={`skill${index}`}
                                id={`skill${index}`}
                                value={skill.value}
                                onChange={e => handleSkillChange(index, e.target.value)}
                                required
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <button type='button' id='addRoleBtn' name='addRoleBtn' onClick={addSkill}>
                +
            </button>
        </fieldset>
    );
}