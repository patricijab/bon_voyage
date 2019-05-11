import React from "react"
import "./Layover.css"
import layover from '../images/layover.png';
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Visibility from "@kiwicom/orbit-components/lib/icons/Visibility";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";


const ChooseForReview = () => (
    <div className="">
        <InputField
            placeholder="Choose activity you wish to review..."
            suffix={
                <ButtonLink transparent icon={<Visibility />} />
            }
        />
    </div>


);


export default ChooseForReview