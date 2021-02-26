import React from 'react'
import Styles from "../css/recipe.module.css"
export default function recipe({ingredientLines}) {
    let list=[]
    if(ingredientLines.length>5)
   { list=ingredientLines.slice(0,5)
    
   }
     else
{
    list=ingredientLines;
}        
    

    return (
        <div className={Styles.column}>
            <h3>Ingridients</h3>
           <ul>{list.map((ingridient,index)=>{return <li className={Styles.li} key={index}>{ingridient}</li>})}</ul>
           {ingredientLines.length>5 && <p> Click view button for full ingridient list </p>}
        </div>
    )
}
