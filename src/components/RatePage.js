import React from "react"
import Button from "@kiwicom/orbit-components/lib/Button";
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars";
import Visibility from "@kiwicom/orbit-components/lib/icons/Visibility";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import "./RatePage.css"
import { Link } from "react-router-dom";


const ReviewLine = (props) => (
	<div className="review-line">
		<span className="review-line-category">{props.category}:</span>
		<span className="avgrate"><RatingStars rating={props.rating} size="small" showEmpty /></span>
	</div>
);

const RatePage = () => (
    <div className="">
        
        <div className="rate-header">
                <Heading type="title3" element="h3">
                    You are  rating this location for <br/><span className="sleeping">sleeping</span>
                </Heading>
        </div>
	
		<div className="avgrevheader">
		<ReviewLine category="Comfort" rating={3}/>
		<ReviewLine category="Peace" rating={2}/>
		<ReviewLine category="Cleanliness" rating={4}/>
		
	
		<span className="review-line-category">Comment:</span>
		
		
			<div className="comment">
        <InputField
            placeholder="Leave your thoughts here..."
			size="small"
        />
			</div>
		
		</div>

		<div >
			<Link to="/">
        	<Button className="submit-button">Submit</Button>
			</Link>
		</div>
		

    </div>

);



export default RatePage