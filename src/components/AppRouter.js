import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layover from './Layover'
import Sleep1 from './Sleep1'
import Reviews from './Reviews'

function Index() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

function AppRouter() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Layover</Link>
						</li>
						<li>
							<Link to="/sleep/">Sleep</Link>
						</li>
						<li>
							<Link to="/review/">Review</Link>
						</li>
					</ul>
				</nav>
				
				<Route path="/" exact component={Layover} />
				<Route path="/sleep/" component={Sleep1} />
				<Route path="/review/" component={Reviews} />
			</div>
		</Router>
	);
}

export default AppRouter;