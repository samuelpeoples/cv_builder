import { useState } from "react";

function Header() {
	const [count, setCount] = useState(0);
	return (
		<>
			<header>
				<p>
					CV Builder
				</p>
			</header>
		</>
	);
}

function Footer() {
	const [count, setCount] = useState(0);
	return (
		<>
			<footer>
				<p>
					Footer
				</p>
			</footer>
		</>
	);
}

export { Header, Footer }
