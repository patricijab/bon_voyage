import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layover from './Layover'
import Sleep1 from './Sleep1'
import Reviews from './Reviews'
import RatePage from './RatePage'
import ChooseForReview from './ChooseForReview'


function AppRouter() {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Layover} />
				<Route path="/sleep/" component={Sleep1} />
				<Route path="/reviews/" component={Reviews} />
				<Route path="/rate/" component={RatePage} />
				<Route path="/chosen/" component={ChooseForReview} />
			</div>
		</Router>
	);
}

export default AppRouter;