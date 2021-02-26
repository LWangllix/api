import React,{ useState} from 'react'
import Styles from "../css/search.module.css"
export default function Search({handleFood,handlePages}) {

    const [input,setInput]=useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
      
    }

   const Food = async(e)=> {
    e.preventDefault();
        let url = new URL('https://api.edamam.com/search')
        let params = { app_id: `30b4c5fc`, app_key: "2b4d9de62de05b91c9b0ed89355eaa33", q: input,to:50 }
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(url);
        const data = await response.json();
        if(data.count!==0)
        {
        handlePages(data.hits.length/5)
        handleFood(data.hits)
        setInput("")
        }
        else{
            alert("can't find anything")
        }
}


    return (
        <div>
        <div className={Styles.content}>
        <p>Here you can get detailed information about dishes</p>
        <div  className={Styles.searchCard}>
        <p>Search recipes by typing a product name or describe it in the text box</p>
        <form action='#' onSubmit={(e)=>Food(e)} >
        <input type="text" value={input}  onChange={handleChange} />
        <button type="submit" >Search</button>
        </form>
        </div>
        </div>
        <hr/>
        </div>
    )
}
