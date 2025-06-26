import { useEffect, useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Roles from "./Roles";
import Reference from "./References";

export default function App() {
	return (
		<div id='content'>
			<form action='post'>
				<fieldset id='personalDetails'>
					<legend>Your Details</legend>
					<label for='name'>Name</label>
					<input name='name' className='personalInput' type='text' required />
					<label for='positionTitle'>Current Title</label>
					<input name='positionTitle' className='personalInput' type='text' />
					<label for='dob'>Date of Birth</label>
					<input name='dob' className='personalInput' type='date' required />
					<label for='mobile'>Mobile</label>
					<input name='mobile' className='personalInput' type='tel' required />
					<label for='email'>Email</label>
					<input name='email' className='personalInput' type='email' required />
					<label for='address'>Address</label>
					<input name='address' className='personalInput' type='text' />
				</fieldset>

				<Skills />
				<Education />
				<Roles />
				<Reference />
				<button type='submit'>Submit</button>
			</form>
			<div id='pageDisplay'>
				<div id='page'></div>
			</div>
		</div>
	);
}
