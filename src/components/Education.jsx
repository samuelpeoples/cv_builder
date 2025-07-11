import { useEffect, useState } from "react";

// Helper to create a new education entry with unique id and empty fields
function createEducation() {
	return {
		id: crypto.randomUUID(),
		place: "",
		study: "",
		periodStart: "",
		periodEnd: "",
		current: "",
		description: ",",
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
		window.dispatchEvent(new Event("storageUpdate"));
	}, [EducationsArr]);

	// Update the value of a specific field for a specific education entry
	function handleEducationChange(index, field, value) {
		const updated = [...EducationsArr];
		if (field === "current") {
			if (value) {
				updated[index].periodEnd = "Current";
			} else {
				updated[index].periodEnd = "";
			}
		}
		updated[index] = { ...updated[index], [field]: value };
		setEducationsArr(updated);
	}

	// Add a new empty Education to the list
	function addEducation() {
		setEducationsArr([...EducationsArr, createEducation()]);
	}

	function deleteEducation(index) {
		const firstHalf = EducationsArr.slice(0, index);
		const secondHalf = EducationsArr.slice(index + 1);
		const updated = firstHalf.concat(secondHalf);
		setEducationsArr(updated);

		// setSkillsArr(skillsArr => (skillsArr.filter((_, i) => i !== index)));
	}

	return (
		<fieldset id='detailSet'>
			<legend>Education</legend>
			{EducationsArr.map((education, index) => (
				<div className='roleDetails' key={education.id}>
					<hr />
					<div>
						<label htmlFor={`eduCurrent${index}`}>Currently Studying:</label>
						<input
							type='checkbox'
							name={`eduCurrent${index}`}
							id={`eduCurrent${index}`}
							checked={education.current}
							onChange={(e) => handleEducationChange(index, "current", e.target.checked)}
						/>
					</div>
					<div>
						<label htmlFor={`eduName${index}`}>Place of Education:</label>
						<input
							type='text'
							name={`eduName${index}`}
							id={`eduName${index}`}
							value={education.place}
							onChange={(e) => handleEducationChange(index, "place", e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor={`eduStudy${index}`}>Title of Study:</label>
						<input
							type='text'
							name={`eduStudy${index}`}
							id={`eduStudy${index}`}
							value={education.study}
							onChange={(e) => handleEducationChange(index, "study", e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor={`eduPeriodStart${index}`}>Date of Study Start:</label>
						<input
							type='date'
							name={`eduPeriodStart${index}`}
							id={`eduPeriodStart${index}`}
							value={education.periodStart}
							onChange={(e) => handleEducationChange(index, "periodStart", e.target.value)}
							required
						/>
					</div>
					{!education.current ? (
						<div>
							<label htmlFor={`eduPeriodEnd${index}`}>Date of Study End:</label>
							<input
								type='date'
								name={`eduPeriodEnd${index}`}
								id={`eduPeriodEnd${index}`}
								value={education.periodEnd}
								onChange={(e) => handleEducationChange(index, "periodEnd", e.target.value)}
								required
							/>
						</div>
					) : (
						<div>
							<label htmlFor={`eduPeriodEnd${index}`}>Date of Study End:</label>
							<span style={{ marginLeft: "8px" }}>Current</span>
						</div>
					)}
					<div>
						<label htmlFor={`eduDesc${index}`}>Description:</label>
						<textarea
							type='text'
							name={`eduDesc${index}`}
							id={`eduDesc${index}`}
							value={education.description}
							onChange={(e) => handleEducationChange(index, "description", e.target.value)}
							required
						/>
					</div>
					<button type='button' className='deleteButton' onClick={(e) => deleteEducation(index)}>
						X
					</button>
				</div>
			))}
			<button type='button' className='addRoleButton' name='addRoleButton' onClick={addEducation}>
				Add prior education
			</button>
		</fieldset>
	);
}
