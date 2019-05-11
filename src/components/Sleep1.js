import React from "react"
import "./Sleep1.css"
import brnik from '../images/brnik.png';
import Button from "@kiwicom/orbit-components/lib/Button"
import layover from "../images/layover.png";
import Location from "@kiwicom/orbit-components/lib/icons/Location";
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import Ac from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import Feedback from "@kiwicom/orbit-components/lib/icons/Feedback";



const Sleep1 = () => (

    <div className="">
        <center><Button>Leave a rating</Button></center>

        <div className="imageWrapper">
            <img id="brnik" className="brnik-image" src={brnik} alt="Brnik1" />

            <span className="iconWrapper1">
                <Location/>
            </span>
            <span className="rating1">
                <RatingStars rating={2.7} size="small" color="attention" showEmpty />
            </span>

                <span className="iconWrapper2">
                    <Popover content={
                        <React.Fragment>
                            <div className="avgrevheader"> <u><b>Average review of this location</b></u><br/></div>
                            <div > <span className="avgrate">Average rate: 2,0</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty/></span></div>
                            <div > <span className="avgrate">Comfort:</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty /></span></div>
                            <div > <span className="avgrate">Peace:</span><span className="avgrate"><RatingStars rating={2} size="small" color="attention" showEmpty /></span></div>
                            <div > <span className="avgrate">Cleanliness:</span><span className="avgrate"><RatingStars rating={4} size="small" color="attention" showEmpty /></span></div>
                            <Button>Read reviews</Button>
                        </React.Fragment>
                    }>
                        <Location/>
                    </Popover>
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
    </div>
);

export default Sleep1