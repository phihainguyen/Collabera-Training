import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
export default function Routing() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
					<Route path="/params/:param">
						<Param />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
const Headline = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.children}
		</div>
	);
};
const FunctionalCounter = (props) => {
	const [ count, setCount ] = useState(0);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};
function Param() {
	let { param } = useParams();
	return <Headline title={param} />;
}
function Home() {
	return <Headline title="Home" />;
}
function About() {
	return (
		<h2>
			<FunctionalCounter />
		</h2>
	);
}
function Users() {
	return <Headline title="Users" />;
}
