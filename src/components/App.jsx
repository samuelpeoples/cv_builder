import { useEffect, useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Roles from "./Roles";
import Reference from "./References";
import Details from "./Details";
import Page from "./Page";

export default function App() {
	return (
		<div id='content'>
			<form action='post'>
				<Details />
				<Skills />
				<Education />
				<Roles />
				<Reference />
				<button onSubmit={(e) => e.preventDefault()} type='submit'>
					Print
				</button>
			</form>
			<div id='pageDisplay'>
				<div id='page'>
					<Page />
				</div>
			</div>
		</div>
	);
}
