import { useState} from 'react';
import { useNavigate, useLocation} from "react-router-dom";

export  const  SearchBar =({onSubmit})=>{
    const [query, setQuery] = useState('')
    

    const navigate = useNavigate();
    const location = useLocation()

    const queryChange = (e)=>{
        setQuery(e.target.value.toLowerCase())
        
    }
   
    const handleSubmit =(e)=>{
        e.preventDefault();
        setQuery('')
        if(query.trim()===''){
            alert('write your query')
            return
        }
       navigate({
           ...location,
           search:`query=${query}`
       })
        onSubmit(query);
        
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value ={query}
            onChange ={queryChange}/>
            <button type = 'submit'>
                <span>Search</span>
            </button>
        </form>
    )
}