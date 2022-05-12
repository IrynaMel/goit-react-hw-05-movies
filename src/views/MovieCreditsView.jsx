import { useState, useEffect } from "react";
import { getCredits } from "services/API";
import { useParams } from "react-router-dom";

export const MovieCreditsView =()=>{
    const [credits, setCredits] = useState(null)

    const { movieId } = useParams();

useEffect(()=>{
    getCredits(movieId).then((data)=>setCredits(data.cast))
},[movieId])


 return(
     <>
     
    {credits && credits.map((actor) =>(<li key = {actor.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
        alt = {actor.name}
        width = '100px'
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://images.unsplash.com/photo-1517374784336-ca542b1df69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
          }}/>
        <p>{actor.name}</p>
        <p>Character: {actor.character}</p>

    </li>))}
     </>
 )
}