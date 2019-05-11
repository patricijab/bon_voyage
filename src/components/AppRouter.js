import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layover from './Layover'
import Content from './Content'

function Users() {
	return <h2>Users</h2>;
}

function AppRouter() {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Layover} />
				<Route path="/content/" component={Content} />
				<Route path="/users/" component={Users} />
				
			</div>
		</Router>
	);
}

/*
				<nav>
					<ul>
						<li>
							<Link to="/">Layover</Link>
						</li>
						<li>
							<Link to="/content/">About</Link>
						</li>
						<li>
							<Link to="/users/">Users</Link>
						</li>
					</ul>
				</nav>
				*/

export default AppRouter;