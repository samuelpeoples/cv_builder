import Skills from "./Skills";
import Education from "./Education";
import Roles from "./Roles";
import Reference from "./References";
import App from "./App";

export default function Page() {
	const skillsList = localStorage.getItem("skillsArr");
	let skillArr;
	if (skillsList) skillArr = JSON.parse(skillsList);
	console.log(skillArr);

	const referenceList = localStorage.getItem("ReferencesArr");
	let referencesArr;
	if (referenceList) referencesArr = JSON.parse(referenceList);

	return (
		<div id='pageContents'>
			<h3>Name</h3>

			<p>Skills 1</p>
			<p>Skills 1</p>
			<p>Skills 1</p>

			<div>
				<ul className='roleDetails'>
					{skillArr.map((skill, index) => (
						<li key={skill.id}>{skill.value}</li>
					))}
				</ul>
			</div>

			<div>
				<ul className='roleDetails'>
					{skillArr.map((skill, index) => (
						<li key={skill.id}>{skill.value}</li>
					))}
				</ul>
			</div>

			<div>
				<ul className='roleDetails'>
					{referencesArr.map((ref, index) => (
						<div key={ref.id}>
							<h3>Reference {index + 1}</h3>
							<li>{ref.name}</li>
							<li>{ref.title}</li>
							<li>{ref.company}</li>
							<li>{ref.mobile}</li>
							<li>{ref.email}</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}
