import { useState, useEffect } from "react";
import { getCredits } from "services/API";
import { useParams } from "react-router-dom";
import { Cast } from "components/Cast/Cast";

export const MovieCreditsView =()=>{
    const [credits, setCredits] = useState(null)

    const { movieId } = useParams();

useEffect(()=>{
    getCredits(movieId).then((data)=>setCredits(data.cast))
},[movieId])


 return(
     <>
     
    {credits && <Cast credits = {credits}/>
    
    
    }
     </>
 )
}