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
	}, [RolesArr]);

	// Update the value of a specific field for a specific Role entry
	function handleRoleChange(index, field, value) {
		const updated = [...RolesArr];
		updated[index] = { ...updated[index], [field]: value };
		setRolesArr(updated);
	}

	// Add a new empty Role to the list
	function addRole() {
		setRolesArr([...RolesArr, createRole()]);
	}

	return (
		<fieldset id='detailSet'>
			<legend>Prior Experience</legend>
			{RolesArr.map((Role, index) => (
				<div className='roleDetails' key={Role.id}>
					<hr />
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
						<label htmlFor={`roleCurrent${index}`}>Is Role Current:</label>
						<input
							type='checkbox'
							name={`roleCurrent${index}`}
							id={`roleCurrent${index}`}
							checked={!!Role.current}
							onChange={(e) => handleRoleChange(index, "current", e.target.checked)}
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
				</div>
			))}
			<button type='button' id='addRoleBtn' name='addRoleBtn' onClick={addRole}>
				Add prior Role
			</button>
		</fieldset>
	);
}
