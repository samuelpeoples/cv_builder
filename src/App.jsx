import { use, useState } from "react";
import Skills from "./Skills";

export default function App() {
	const [numOfRoles, setNumOfRoles] = useState(0);
	const Roles = () =>
		Array.from({ length: numOfRoles }).map((_item, index) => (
			<RoleDetails count={numOfRoles} index={index} key={crypto.randomUUID()} />
		));

	const [numOfRefs, setNumOfRefs] = useState(0);
	const Refs = () =>
		Array.from({ length: numOfRefs }).map((_item, index) => (
			<RefDetails count={numOfRefs} index={index} key={crypto.randomUUID()} />
		));
	const [numOfEdu, setNumOfEdu] = useState(0);
	const Education = () =>
		Array.from({ length: numOfEdu }).map((_item, index) => (
			<EduDetails count={numOfEdu} index={index} key={crypto.randomUUID()} />
		));

	return (
		<div id='content'>
			<form action='post'>
				<fieldset id='personalDetails'>
					<legend>Your Details</legend>
					<InputField name='name' className='personalInput' type='text' labelText='Name' required />
					<InputField name='positionTitle' className='personalInput' type='text' labelText='Current Title' />
					<InputField name='dob' className='personalInput' type='date' labelText='Date of Birth' required />
					<InputField name='mobile' className='personalInput' type='tel' labelText='Mobile' required />
					<InputField name='email' className='personalInput' type='email' labelText='Email' required />
					<InputField name='address' className='personalInput' type='text' labelText='Address' />
				</fieldset>

				<Skills />

				<fieldset id='roles'>
					<legend>Education</legend>
					<Education />
					<button type='button' id='addRoleBtn' name='addRoleBtn' onClick={() => setNumOfEdu(numOfEdu + 1)}>
						Add prior education
					</button>
				</fieldset>

				<fieldset id='roles'>
					<legend>Experience</legend>
					<Roles />
					<button
						type='button'
						id='addRoleBtn'
						name='addRoleBtn'
						onClick={() => setNumOfRoles(numOfRoles + 1)}>
						Add previous role
					</button>
				</fieldset>

				<fieldset id='roles'>
					<legend>References</legend>
					<Refs />
					<button type='button' id='addRoleBtn' name='addRoleBtn' onClick={() => setNumOfRefs(numOfRefs + 1)}>
						Add reference
					</button>
				</fieldset>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

function InputField({ name = "name", className = "", id = name, type = "text", labelText = "Label Text" }) {
	return (
		<div className={className}>
			<label for={name}>{labelText}:</label>
			<input type={type} name={name} id={id} required />
		</div>
	);
}

function InputFieldNoLabel({ name = "name", className = "", id = name, type = "text", labelText = "Label Text" }) {
	return (
		<>
			<input type={type} name={name} id={id} required />
		</>
	);
}



function EduDetails({ index }) {
	const eduName = `roleTitle${index}`;
	const eduStudy = `eduStudy${index}`;
	const eduPeriod = `eduPeriod${index}`;
	return (
		<div className='roleDetails'>
			{/* { index == 0 ? null : <hr style={{ width: "600px" }} /> } */}
			<hr style={{ width: "600px" }} />
			{/* <h3 style={{ margin: 0 }}>Role {index + 1}</h3> */}
			<label for={eduName}>Place of Education:</label>
			<input type={"text"} name={eduName} id={eduName} required />
			<label for={eduStudy}>Title of Study:</label>
			<input type={"text"} name={eduStudy} id={eduStudy} required />
			<label for={eduPeriod}>Date of Study:</label>
			<input type={"date"} name={eduPeriod} id={eduPeriod} required />
		</div>
	);
}

function RoleDetails({ index }) {
	const roleTitle = `roleTitle${index}`;
	const rolePeriod = `rolePeriod${index}`;
	const roleCurrent = `roleCurrent${index}`;
	const roleCompany = `roleCompany${index}`;
	const roleDescription = `roleDesc${index}`;
	return (
		<div className='roleDetails'>
			<hr style={{ width: "600px" }} />
			{/* <h3 style={{ margin: 0 }}>Role {index + 1}</h3> */}
			<InputField name={roleTitle} type='text' labelText='Role Title' required />
			<InputField name={rolePeriod} type='date' labelText='Role Period' required />
			<InputField name={roleCurrent} type='checkbox' labelText='Is Role Current' required />
			<InputField name={roleCompany} type='text' labelText='Role Company' required />
			<InputField name={roleDescription} type='text' labelText='Role Description' required />
		</div>
	);
}

function RefDetails({ index }) {
	const refName = `refName${index}`;
	const refTitle = `refTitle${index}`;
	const refCompany = `refCompany${index}`;
	const refMobile = `refMobile${index}`;
	const refEmail = `refEmail${index}`;
	return (
		<div className='roleDetails'>
			<hr style={{ width: "600px" }} />
			{/* <h3 style={{ margin: 0 }}>Role {index + 1}</h3> */}
			<InputField name={refName} type='text' labelText='Name' required />
			<InputField name={refTitle} type='text' labelText='Title' required />
			<InputField name={refCompany} type='text' labelText='Company' required />
			<InputField name={refMobile} type='tel' labelText='Mobile' required />
			<InputField name={refEmail} type='email' labelText='Email' required />
		</div>
	);
}
