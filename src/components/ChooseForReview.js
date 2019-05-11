import React from "react"
import "./Layover.css"
import brnik from '../images/brnik.png';
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Visibility from "@kiwicom/orbit-components/lib/icons/Visibility";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import "./ChooseForReview.css"


const ChooseForReview = () => (
    <div className="">
        <div className="header">
            <Heading type="title3" element="h3">
                Choose activity
            </Heading>
        </div>
        
        <InputField
            placeholder="Choose activity you wish to review..."
            suffix={
                <ButtonLink transparent icon={<Visibility />} />
            }
        />
	
		<div className="header">
			<Heading type="title3" element="h3">
				Select place on map to review
			</Heading>
		</div>
	
		<div className="imageWrapper">
			<img id="brnik" className="brnik-image" src={brnik} alt="Brnik1" />
        </div>
    
    
    </div>


);


export default ChooseForReview