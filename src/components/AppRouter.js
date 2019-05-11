import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layover from './Layover'
import Sleep1 from './Sleep1'
import Reviews from './Reviews'
import ChooseForReview from './ChooseForReview'
import MapForChosenReview from './MapForChosenReview'

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
						<li>
							<Link to="/chosen/">ChooseForReview</Link>
						</li>
						<li>
							<Link to="/chosenmap/">MapForChosenReview</Link>
						</li>
					</ul>
				</nav>
				
				<Route path="/" exact component={Layover} />
				<Route path="/sleep/" component={Sleep1} />
				<Route path="/review/" component={Reviews} />
				<Route path="/chosen/" component={ChooseForReview} />
				<Route path="/chosenmap/" component={MapForChosenReview} />
			</div>
		</Router>
	);
}

export default AppRouter;