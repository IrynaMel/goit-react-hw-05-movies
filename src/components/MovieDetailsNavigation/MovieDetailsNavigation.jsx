
import {Li, Div} from './MovieDetailsNavigation.styled'


export const MovieDetailNavigation = ()=>{


    return(
    <Div>
    <h3>Additional information</h3>
    <ul>
       <Li to ='cast' >Casts</Li>
       <Li to ='reviews'>Reviews</Li>
    </ul>
    
    </Div>
    
    )
}