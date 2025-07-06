import { useEffect, useState } from "react";
import * as faIcons from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";

export default function Page() {
	const [data, setData] = useState(loadAll());

	function loadAll() {
		return {
			details: JSON.parse(localStorage.getItem("detailsArr") || "{}") || {},
			skills: JSON.parse(localStorage.getItem("skillsArr") || "[]") || [],
			education: JSON.parse(localStorage.getItem("EducationsArr") || "[]") || [],
			roles: JSON.parse(localStorage.getItem("RolesArr") || "[]") || [],
			references: JSON.parse(localStorage.getItem("ReferencesArr") || "[]") || [],
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
			<h2>{data.details.fullName}</h2>
			<h3>{data.details.title}</h3>
			<div id='pageContentsDetails'>
				<h4>Details</h4>
				<p>{data.details.dob}</p>
				<p>Mobile: {data.details.mobile}</p>
				<p>Email: {data.details.email}</p>
				<p>Location: {data.details.address}</p>
			</div>

			<div id='pageContentsSkills'>
				<h4>Skills</h4>
				<ul style={{  paddingLeft: "24px" }}>
					{(data.skills || []).map((skill) => (
						<li key={skill.id}>{skill.value}</li>
					))}
				</ul>
			</div>

			<div id='pageContentsEdu'>
				<h4>Education</h4>
				{(data.education || []).map((edu) => (
					<div key={edu.id}>
						<p>
							<strong>
								{edu.place} - {edu.study}
							</strong>
							<br />
							{edu.periodStart} - {edu.periodEnd}
							<p>{edu.description}</p>
						</p>
					</div>
				))}
			</div>

			<div id='pageContentsRoles'>
				<h4>Roles</h4>

				{(data.roles || []).map((role) => (
					<div key={role.id}>
						<p>
							<strong>
								{role.title} - {role.company}
							</strong>
							<br />
							{role.periodStart} - {role.periodEnd}
						</p>
						<p>{role.description}</p>
					</div>
				))}
			</div>

			<div id='pageContentsRefs'>
				<h4>References</h4>
				<ul>
					{(data.references || []).map((ref, index) => (
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
