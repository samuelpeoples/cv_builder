import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	const [numOfRoles, setNumOfRoles] = useState(0);
	const Roles = () =>
		Array.from({ length: numOfRoles }).map((_item, index) => (
			<RoleDetails count={numOfRoles} index={index} key={crypto.randomUUID()} />
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
					<InputField
						name='refName1'
						className='personalInput'
						type='text'
						labelText='Reference 1 Name'
						required
					/>
					<InputField
						name='refMob1'
						className='personalInput'
						type='tel'
						labelText='Reference 1 Mobile'
						required
					/>
					<InputField
						name='refEmail1'
						className='personalInput'
						type='email'
						labelText='Reference 1 Email'
						required
					/>
					<InputField
						name='refName2'
						className='personalInput'
						type='text'
						labelText='Reference 2 Name'
						required
					/>
					<InputField
						name='refMob2'
						className='personalInput'
						type='tel'
						labelText='Reference 2 Mobile'
						required
					/>
					<InputField
						name='refEmail2'
						className='personalInput'
						type='email'
						labelText='Reference 2 Email'
						required
					/>
				</fieldset>

				<fieldset id='roles'>
					<legend>Prior Experience</legend>
					<p>{numOfRoles}</p>
					<Roles />
					<button type='button' name='addRoleBtn' onClick={() => setNumOfRoles(numOfRoles + 1)}>
						Make another role button
					</button>
				</fieldset>
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

function RoleDetails({ index }) {
	const roleTitle = `roleTitle${index}`;
	const rolePeriod = `rolePeriod${index}`;
	const roleCompany = `roleCompany${index}`;
	const roleDescription = `roleDesc${index}`;
	return (
		<div className='roleDetails'>
			<h3>Role {index + 1}</h3>
			<InputField name={roleTitle} type='text' labelText='Role Title' required />
			<InputField name={rolePeriod} type='date' labelText='Role Period' required />
			<InputField name={roleCompany} type='text' labelText='Role Company' required />
			<InputField name={roleDescription} type='text' labelText='Role Description' required />
		</div>
	);
}

export default App;
