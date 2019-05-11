import React from "react"
import "./Layover.css"
import layover from '../images/layover.png';
import Heading from "@kiwicom/orbit-components/lib/Heading";
import brnik from "../images/brnik.png";
import Location from "@kiwicom/orbit-components/lib/icons/Location";
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars/index";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import Button from "@kiwicom/orbit-components/lib/Button";



const MapForChosenReview = () => (
    <div className="imageWrapper">
        <img id="brnik" className="brnik-image" src={brnik} alt="Brnik1" />

        <span className="iconWrapper1">
                <Location/>
            </span>
        <span className="rating1">
                <RatingStars rating={2.7} size="small" color="attention" showEmpty />
            </span>

        <span className="iconWrapper2">
                <Location/>
            </span>
        <span className="rating2">
                <RatingStars rating={3} size="small" color="attention" showEmpty />
            </span>

        <span className="iconWrapper3">
                <Location/>
            </span>
        <span className="rating3">
                <RatingStars rating={4} size="small" color="attention" showEmpty />
            </span>

        <span className="iconWrapper4">
                <Location/>
            </span>
        <span className="rating4">
                <RatingStars rating={2} size="small" color="attention" showEmpty />
            </span>

        <span className="iconWrapper5">
                <Location/>
            </span>
        <span className="rating5">
                <RatingStars rating={3.9} size="small" color="attention" showEmpty />
            </span>
    </div>


);


export default MapForChosenReview