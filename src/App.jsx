import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	return (
		<div id='content'>
			<form action='post'>
				<fieldset>
					<legend>Your Details</legend>
					<InputField name='name' type='text' labelText='Name' required />
					<InputField name='positionTitle' type='text' labelText='Current Title' />
					<InputField name='dob' type='date' labelText='Date of Birth' required />
					<InputField name='mobile' type='tel' labelText='Mobile' required />
					<InputField name='email' type='email' labelText='Email' required />
					<InputField name='address' type='text' labelText='Address' />
					<InputField name='refName1' type='text' labelText='Reference 1 Name' required />
					<InputField name='refMob1' type='tel' labelText='Reference 1 Mobile' required />
					<InputField name='refEmail1' type='email' labelText='Reference 1 Email' required />
					<InputField name='refName2' type='text' labelText='Reference 2 Name' required />
					<InputField name='refMob2' type='tel' labelText='Reference 2 Mobile' required />
					<InputField name='refEmail2' type='email' labelText='Reference 2 Email' required />
				</fieldset>

				<fieldset>
					<legend>Prior Experience</legend>
					<div>
						<label for='name'>Name:</label>
						<input type='text' name='name' id='name' required />
					</div>
					<label for='name'>Name:</label>
					<input type='text' name='name' id='name' required />

					<button type='button' name='addRoleBtn'>
						Make another role button
					</button>
				</fieldset>
			</form>
		</div>
	);
}

function InputField({ name = "name", id = name, type = "text", labelText = "Label Text" }) {
	return (
		<div>
			<label for={name}>{labelText}:</label>
			<input type={type} name={name} id={id} required />
		</div>
	);
}

export default App;
