import React from "react"
import Button from "@kiwicom/orbit-components/lib/Button";
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars";
import Visibility from "@kiwicom/orbit-components/lib/icons/Visibility";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import "./RatePage.css"



const RatePage = () => (
    <div className="">
        
        <div className="rate-header">
                <Heading type="title3" element="h3">
                    You are  rating this location for <br/><span className="sleeping">sleeping</span>
                </Heading>
        </div>
        
        <div > <span className="avgrate">Comfort:</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty /></span></div>
        <div > <span className="avgrate">Peace:</span><span className="avgrate"><RatingStars rating={2} size="small" color="attention" showEmpty /></span></div>
        <div > <span className="avgrate">Cleanliness:</span><span className="avgrate"><RatingStars rating={4} size="small" color="attention" showEmpty /></span></div>

        <InputField
            placeholder="Leave your thoughts here..."
        />

        <Button>Submit</Button>

    </div>

);



export default RatePage