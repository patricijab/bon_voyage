import React from "react"
import brnik from '../images/brnik.png';
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Visibility from "@kiwicom/orbit-components/lib/icons/Visibility";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import "./ChooseForReview.css"
import Button from "@kiwicom/orbit-components/lib/Button"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import Location from "@kiwicom/orbit-components/lib/icons/Location";
import { Link } from "react-router-dom";



function addIcon(el) {
    console.log(el);
    document.getElementById("button-for-review").style.display = "block";
}

const ChooseForReview = () => (
    <div className="">
        <div className="header">
            <Heading type="title3" element="h3">
                Choose activity
            </Heading>
        </div>
        
        <div className="input-choose-review">
            <InputField
                placeholder="Choose activity you wish to review..."
                suffix={
                    <ButtonLink />
                }
            />
        </div>
	
		<div className="header">
			<Heading type="title3" element="h3">
				Select place on map to review
			</Heading>
		</div>
	
		<div onClick={addIcon} className="review-imageWrapper">
			<img id="brnik" className="brnik-image" src={brnik} alt="Brnik1" />
        </div>
	
        <div id="button-for-review" className="button-choose-for-review">
			<Location size="large"/>
        </div>
	
	
		<div className="continue">
            <Link to="/rate/">
				<Button
					size="normal"
					type="primary"
					iconLeft={<Plus />}
					circled
					title="Button"
				/>
            </Link>
		</div>
    
    </div>


);


export default ChooseForReview