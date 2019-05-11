import React from "react"
import "./Reviews.css"
import Heading from "@kiwicom/orbit-components/lib/Heading";
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars/index";
import Bordered from "@kiwicom/orbit-components/lib/Button";



const Reviews = () => (
    <div className="">
        <span className="MarkZuckerberg">
            <div className="authorHeader"> <b>Mark Zuckerberg</b><br/></div>
            <div > <span className="avgrate">Average rate: 2,7</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty/></span></div>
            <div > <span className="avgrate">Comfort:</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Peace:</span><span className="avgrate"><RatingStars rating={2} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Cleanliness:</span><span className="avgrate"><RatingStars rating={4} size="small" color="attention" showEmpty /></span></div>
            <div className="comment"> <i>"Very dirty floor... ew :(" </i></div>
        </span>

        <span className="AgathaChristie">
            <div className="authorHeader"> <b>Agatha Christie</b><br/></div>
            <div > <span className="avgrate">Average rate: 4,1</span><span className="avgrate"><RatingStars rating={4} size="small" color="attention" showEmpty/></span></div>
            <div > <span className="avgrate">Comfort:</span><span className="avgrate"><RatingStars rating={4} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Peace:</span><span className="avgrate"><RatingStars rating={4} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Cleanliness:</span><span className="avgrate"><RatingStars rating={5} size="small" color="attention" showEmpty /></span></div>
            <div className="comment"> <i>"Had an exsquisit nap." </i></div>
        </span>

        <span className="NikolaTesla">
            <div className="authorHeader"> <b>Nikola Tesla</b><br/></div>
            <div > <span className="avgrate">Average rate: 3</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty/></span></div>
            <div > <span className="avgrate">Comfort:</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Peace:</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Cleanliness:</span><span className="avgrate"><RatingStars rating={3} size="small" color="attention" showEmpty /></span></div>
            <div className="comment"> <i>"Nothing special... Good for a power nap lol." </i></div>
        </span>

        <span className="SantaClaus">
            <div className="authorHeader"> <b>Santa Claus</b><br/></div>
            <div > <span className="avgrate">Average rate: 1</span><span className="avgrate"><RatingStars rating={1} size="small" color="attention" showEmpty/></span></div>
            <div > <span className="avgrate">Comfort:</span><span className="avgrate"><RatingStars rating={1} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Peace:</span><span className="avgrate"><RatingStars rating={1} size="small" color="attention" showEmpty /></span></div>
            <div > <span className="avgrate">Cleanliness:</span><span className="avgrate"><RatingStars rating={1} size="small" color="attention" showEmpty /></span></div>
            <div className="comment"> <i>"Don't even bother coming here!11!1! Worst experience EVER!!"</i> </div>
        </span>
    </div>


);


export default Reviews