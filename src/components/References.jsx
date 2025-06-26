import { useEffect, useState } from "react";

// Helper to create a new Reference entry with unique id and empty fields
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

export default function Reference() {
	// Initialize ReferencesArr state from localStorage if available, otherwise start with one empty Reference
	const [ReferencesArr, setReferencesArr] = useState(() => {
		const saved = localStorage.getItem("ReferencesArr");
		if (saved) return JSON.parse(saved);
		return [createReference()];
	});

	// Persist ReferencesArr to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("ReferencesArr", JSON.stringify(ReferencesArr));
	}, [ReferencesArr]);

	// Update the value of a specific field for a specific Reference entry
	function handleReferenceChange(index, field, value) {
		const updated = [...ReferencesArr];
		updated[index] = { ...updated[index], [field]: value };
		setReferencesArr(updated);
	}

	// Add a new empty Reference to the list
	function addReference() {
		setReferencesArr([...ReferencesArr, createReference()]);
	}

	return (
		<fieldset id='detailSet'>
			<legend>References</legend>
			{ReferencesArr.map((Reference, index) => (
				<div className='roleDetails' key={Reference.id}>
					<hr style={{ width: "600px" }} />
					<div>
						<label htmlFor={`refName${index}`}>Name:</label>
						<input
							type='text'
							name={`refName${index}`}
							id={`refName${index}`}
							value={Reference.name}
							onChange={(e) => handleReferenceChange(index, "name", e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor={`refTitle${index}`}>Title:</label>
						<input
							type='text'
							name={`refTitle${index}`}
							id={`refTitle${index}`}
							value={Reference.title}
							onChange={(e) => handleReferenceChange(index, "title", e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor={`refCompany${index}`}>Company:</label>
						<input
							type='text'
							name={`refCompany${index}`}
							id={`refCompany${index}`}
							value={Reference.company}
							onChange={(e) => handleReferenceChange(index, "company", e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor={`refMobile${index}`}>Mobile:</label>
						<input
							type='tel'
							name={`refMobile${index}`}
							id={`refMobile${index}`}
							value={Reference.mobile}
							onChange={(e) => handleReferenceChange(index, "mobile", e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor={`refEmail${index}`}>Mobile:</label>
						<input
							type='email'
							name={`refEmail${index}`}
							id={`refEmail${index}`}
							value={Reference.email}
							onChange={(e) => handleReferenceChange(index, "email", e.target.value)}
							required
						/>
					</div>
				</div>
			))}
			<button type='button' id='addRoleBtn' name='addRoleBtn' onClick={addReference}>
				Add Reference
			</button>
		</fieldset>
	);
}
