import React from "react"
import "./Layover.css"
import layover from '../images/layover.png';
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Button from "@kiwicom/orbit-components/lib/Button";
import { Link } from "react-router-dom";
import Accommodation from "@kiwicom/orbit-components/lib/icons/Accommodation"
import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Restaurant from "@kiwicom/orbit-components/lib/icons/Restaurant"
import BaggagePersonalItem from "@kiwicom/orbit-components/lib/icons/BaggagePersonalItem"
import InputField from "@kiwicom/orbit-components/lib/InputField";


const ButtonLink = (props) => (
	<Link to="/sleep/"
		className="buttonlink">
		<Card>
			<CardSection>
				{props.icon}
				<br/>{props.text}
			</CardSection>
		</Card>
	</Link>
);


const Layover = () => (
	<div className="">
		<img className="layover-image" src={layover} alt="Layover" />
		
		<Heading type="title2" element="h2">
			Choose activity
		</Heading>
		
		<div className="activity-cards">
			
			<div className="activity-cards-container">
				<ButtonLink icon={<Accommodation size="large"/>} text="Sleep"></ButtonLink>
				<ButtonLink icon={<Cocktail size="large"/>} text="Hangout"></ButtonLink>
			</div>
			
			<div className="activity-cards-container">
				<ButtonLink icon={<BaggagePersonalItem size="large"/>} text="Work"></ButtonLink>
				<ButtonLink icon={<Restaurant size="large"/>} text="Eat and drink"></ButtonLink>
			</div>
			
		</div>
		
		<div className="layout-input">
			<InputField
				size="small"
				//value=""
				placeholder="Other..."
				//onChange={action}
			/>
		</div>
		
		<div className="layout-button">
			<Link to="/chosen/">
				<Button >
					Want to help others? Add a review!
				</Button>
			</Link>
		</div>
		
	</div>
);


export default Layover