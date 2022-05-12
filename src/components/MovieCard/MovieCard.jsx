import { Container, TexContainer, UlGenres, Li } from "./MovieCard.styled";

export const MovieCard = ({movie})=>{
    return (
        <Container>
        
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    alt ={movie.title}
    onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80";
      }}/>
      <TexContainer>
      <h2>{movie.title}({movie.release_date.slice(0,4)}) </h2>
      <p>User score: {movie.vote_average*10}% </p>
      <h3>Overview: </h3>
      <p>{movie.overview}</p>
      <h3>Genres:</h3>
      <UlGenres>
       {
        movie.genres.map((genra)=>(
      <Li key={genra.id}>{genra.name}</Li>))
     } </UlGenres>
      
      
      </TexContainer>
      
      </Container>
    )
}