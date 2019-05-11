import React from "react"

import RatingStars from "@kiwicom/orbit-components/lib/RatingStars";
import "./Reviews.css"

const ReviewLine = (props) => (
    <div className="review-line">
        <span className="review-line-category">{props.category}:</span>
        <span className="avgrate"><RatingStars rating={props.rating} size="small" color="attention" showEmpty /></span>
    </div>
);

const Reviews = () => (
    <div className="">
        <span className="MarkZuckerberg">
            <div className="authorHeader"> <b>Mark Zuckerberg</b><br/></div>
            <ReviewLine category="Comfort" rating={3}/>
            <ReviewLine category="Peace" rating={2}/>
            <ReviewLine category="Cleanliness" rating={4}/>
            <div className="comment"> <i>"The floor was so dirty.. ew!! :(" </i></div>
        </span>

        <span className="AgathaChristie">
            <div className="authorHeader"> <b>Agatha Christie</b><br/></div>
            <ReviewLine category="Comfort" rating={4}/>
            <ReviewLine category="Peace" rating={4}/>
            <ReviewLine category="Cleanliness" rating={5}/>

            <div className="comment"> <i>"Had an exsquisit nap." </i></div>
        </span>

        <span className="NikolaTesla">
            <div className="authorHeader"> <b>Nikola Tesla</b><br/></div>

            <ReviewLine category="Comfort" rating={3}/>
            <ReviewLine category="Peace" rating={3}/>
            <ReviewLine category="Cleanliness" rating={3}/>

            <div className="comment"> <i>"Nothing special... Good for a power nap lol." </i></div>
        </span>

        <span className="SantaClaus">
            <div className="authorHeader"> <b>Santa Claus</b><br/></div>
            <ReviewLine category="Comfort" rating={1}/>
            <ReviewLine category="Peace" rating={1}/>
            <ReviewLine category="Cleanliness" rating={1}/>

            <div className="comment"> <i>"Don't even bother coming here!11!1! Worst experience EVER!!"</i> </div>
        </span>
    </div>


);


export default Reviews