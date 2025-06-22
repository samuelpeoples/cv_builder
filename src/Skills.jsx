import { useEffect, useState } from "react";

// Helper function to create a new skill object with a unique id
function createSkill(value = "") {
	return { id: crypto.randomUUID(), value };
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

	return (
		<fieldset id='roles'>
			<legend>Skills</legend>
			<div>
				<ul className='roleDetails'>
					{/* Render each skill input field */}
					{skillsArr.map((skill, index) => (
						<li key={skill.id}>
							<input
								type='text'
								name={`skill${index}`}
								id={`skill${index}`}
								value={skill.value}
								onChange={(e) => handleSkillChange(index, e.target.value)}
								required
							/>
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
