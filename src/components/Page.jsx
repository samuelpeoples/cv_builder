import { useEffect, useState } from "react";

export default function Page() {
	const [data, setData] = useState(loadAll());

	function loadAll() {
		return {
			skills: JSON.parse(localStorage.getItem("skillsArr" || "[]")),
			education: JSON.parse(localStorage.getItem("EducationsArr" || "[]")),
			roles: JSON.parse(localStorage.getItem("RolesArr" || "[]")),
			references: JSON.parse(localStorage.getItem("ReferencesArr" || "[]")),
		};
	}

	useEffect(() => {
		function handleUpdate() {
			setData(loadAll());
		}
		window.addEventListener("storageUpdate", handleUpdate);
		return () => window.removeEventListener("storateUpdate", handleUpdate);
	}, []);

	return (
		<div id='pageContents'>
			<h3>Name</h3>

			<div>
				Skills
				<ul>
					{data.skills.map((skill) => (
						<li key={skill.id}>{skill.value}</li>
					))}
				</ul>
			</div>

			<div>
				Education
				<ul>
					{data.education.map((edu) => (
						<div key={edu.id}>
							<li>{edu.place}</li>
							<li>{edu.study}</li>
							<li>
								{edu.periodStart} - {edu.periodEnd}
							</li>
						</div>
					))}
				</ul>
			</div>

			<div>
				Roles
				<ul>
					{data.roles.map((role) => (
						<div key={role.id}>
							<li>{role.title}</li>
							<li>
								{role.periodStart} - {role.periodEnd}
							</li>
							<li>{role.current}</li>
							<li>{role.company}</li>
							<li>{role.description}</li>
						</div>
					))}
				</ul>
			</div>

			<div>
				References
				<ul>
					{data.references.map((ref, index) => (
						<div key={ref.id}>
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
