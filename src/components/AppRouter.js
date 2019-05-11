import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layover from './Layover'
import Content from './Content'
import Sleep1 from './Sleep1'


function AppRouter() {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Layover} />
				<Route path="/content/" component={Sleep1} />
				<Route path="/users/" component={Users} />
			</div>
		</Router>
	);
}

export default AppRouter;