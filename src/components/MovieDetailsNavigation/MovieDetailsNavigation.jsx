import { Link } from 'react-router-dom';


export const MovieDetailNavigation = ()=>{

    return(
    <>
    <p>Additional information</p>
    <ul>
       <Link to ='cast'>Casts</Link>
       <Link to ='reviews'>reviews</Link>
    </ul>
    
    </>
    
    )
}