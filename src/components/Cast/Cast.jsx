import { Ul, Li } from "./Cast.styled";

export const Cast =({credits})=>{

    return( <Ul>
        {credits.map((actor) =>(
           
        <Li key = {actor.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt = {actor.name}
            width = '100px'
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://images.unsplash.com/photo-1517374784336-ca542b1df69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
              }}/>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
    
        </Li>
        ))}</Ul>
    )
}