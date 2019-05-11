import React from "react"
import "./Sleep1.css"
import brnik from '../images/brnik.png';
import Button from "@kiwicom/orbit-components/lib/Button"
import Location from "@kiwicom/orbit-components/lib/icons/Location";
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane"
import { Link } from "react-router-dom";


const ReviewLine = (props) => (
	<div className="review-line">
        <span className="review-line-category">{props.category}:</span>
        <span className="avgrate"><RatingStars rating={props.rating} size="small" color="attention" showEmpty /></span>
    </div>
);



const Sleep1 = () => (

    <div>
	    
        <div className="heading">
            <Heading type="title2" element="h2"><Airplane size=""/> Ljubljana Jože Pučnik Airport</Heading>
        </div>
        

        <div className="imageWrapper">
            <img id="brnik" className="brnik-image" src={brnik} alt="Brnik1" />

            <span className="iconWrapper1">
                <Location size="large"/>
            </span>
            <span className="rating1">
                <RatingStars rating={2.7} size="small" color="attention" showEmpty />
            </span>

            <span className="iconWrapper2">
                <Popover content={
                    <React.Fragment>
                        <div className="avgrevheader"> <u><b>Average review of this location</b></u> (3,0)<br/></div>
                        <ReviewLine category="Comfort" rating={3}/>
                        <ReviewLine category="Peace" rating={2}/>
                        <ReviewLine category="Cleanliness" rating={4}/>
						<Link to="/reviews/"><Button className="full-width">Read reviews</Button></Link>
                    </React.Fragment>
                }>
                    <Location size="large"/>
                </Popover>
            </span>

            <span className="rating2">
                <RatingStars rating={3} size="small" color="attention" showEmpty />
            </span>

            <span className="iconWrapper3">
                <Location size="large"/>
            </span>
            <span className="rating3">
                <RatingStars rating={4} size="small" color="attention" showEmpty />
            </span>

            <span className="iconWrapper4">
                <Location size="large"/>
            </span>
            <span className="rating4">
                <RatingStars rating={2} size="small" color="attention" showEmpty />
            </span>

            <span className="iconWrapper5">
                <Location size="large"/>
            </span>
            <span className="rating5">
                <RatingStars rating={3.9} size="small" color="attention" showEmpty />
            </span>
        </div>
	
		<div>
			<Button className="full-width">Want to help others? Add a review!</Button>
		</div>
    
    
    </div>
);

export default Sleep1