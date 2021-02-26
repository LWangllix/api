import React from 'react'
import Styles from "../css/foodCards.module.css"
import Recipe from "./recipe"
export default function foodCards({data}) {
    return (
        <div className={Styles.recipeCard} >
        <div className={Styles.alignn}>
        <img src={data.recipe.image} alt={data.recipe.label} />
        <div className={Styles.content}>
        <h2> {data.recipe.label}</h2>   
        <div>
        <p><strong>Energy Value </strong>{Math.round(data.recipe.totalNutrients.ENERC_KCAL["quantity"])} kcal</p>
        <p><strong>Weight </strong>{ Math.round(data.recipe.totalWeight)} g.</p>   
        <p><strong>Fat</strong> { Math.round(data.recipe.digest[0]["total"])} g.</p>
        <p><strong>Carbs</strong> { Math.round(data.recipe.digest[1]["total"])} g.</p>
        <p> <strong>Protein</strong> { Math.round(data.recipe.digest[2]["total"])} g.</p>
        </div>
        <button onClick={()=> window.location.assign(data.recipe.url)}>view</button>
        </div>
        <Recipe ingredientLines={data.recipe.ingredientLines}/>
</div>

       </div>
    )
}
