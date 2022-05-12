import { useState, useEffect } from "react";
import { getReviews } from "services/API";
import { useParams, useLocation} from "react-router-dom";

export const MovieReviewsView =()=>{
    const [reviews, setReviews] = useState(null)

    const { movieId } = useParams();

const location = useLocation()

useEffect(()=>{
    getReviews(movieId).then((data)=>
    
    setReviews(data.results))
},[movieId])


if(!reviews || reviews.length ===0){
    return(
    <p>We don't have any reviews for this movie</p>)
}
 return(
       
        <>
        {reviews && reviews.map((review)=>(
            <li key ={review.id} >
                <h3>{review.author}</h3>
                <p>{review.content}</p>
            </li>
        ))}
        </>
    )
}