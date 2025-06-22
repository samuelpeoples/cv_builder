import { useEffect, useState } from "react";

// Helper to create a new education entry with unique id and empty fields
function createEducation() {
	return {
		id: crypto.randomUUID(),
		place: "",
		study: "",
		periodStart: "",
		periodEnd: "",
	};
}

export default function Education() {
	// Initialize EducationsArr state from localStorage if available, otherwise start with one empty Education
	const [EducationsArr, setEducationsArr] = useState(() => {
		const saved = localStorage.getItem("EducationsArr");
		if (saved) return JSON.parse(saved);
		return [createEducation()];
	});

	// Persist EducationsArr to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("EducationsArr", JSON.stringify(EducationsArr));
	}, [EducationsArr]);

	// Update the value of a specific field for a specific education entry
	function handleEducationChange(index, field, value) {
		const updated = [...EducationsArr];
		updated[index] = { ...updated[index], [field]: value };
		setEducationsArr(updated);
	}

	// Add a new empty Education to the list
	function addEducation() {
		setEducationsArr([...EducationsArr, createEducation()]);
	}

	return (
		<fieldset id='roles'>
			<legend>Education</legend>
			{EducationsArr.map((education, index) => (
				<div className='roleDetails' key={education.id}>
					<hr style={{ width: "600px" }} />
					<label htmlFor={`eduName${index}`}>Place of Education:</label>
					<input
						type='text'
						name={`eduName${index}`}
						id={`eduName${index}`}
						value={education.place}
						onChange={(e) => handleEducationChange(index, "place", e.target.value)}
						required
					/>
					<label htmlFor={`eduStudy${index}`}>Title of Study:</label>
					<input
						type='text'
						name={`eduStudy${index}`}
						id={`eduStudy${index}`}
						value={education.study}
						onChange={(e) => handleEducationChange(index, "study", e.target.value)}
						required
					/>
					<label htmlFor={`eduPeriodStart${index}`}>Date of Study Start:</label>
					<input
						type='date'
						name={`eduPeriodStart${index}`}
						id={`eduPeriodStart${index}`}
						value={education.period}
						onChange={(e) => handleEducationChange(index, "periodStart", e.target.value)}
						required
					/>
					<label htmlFor={`eduPeriodEnd${index}`}>Date of Study End:</label>
					<input
						type='date'
						name={`eduPeriodEnd${index}`}
						id={`eduPeriodEnd${index}`}
						value={education.period}
						onChange={(e) => handleEducationChange(index, "periodEnd", e.target.value)}
						required
					/>
				</div>
			))}
			<button type='button' id='addRoleBtn' name='addRoleBtn' onClick={addEducation}>
				Add prior education
			</button>
		</fieldset>
	);
}
