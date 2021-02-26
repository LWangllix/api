import React from 'react'
import FoodCardas from "../components/foodCards"
import PaginationBar from "../components/paginationBar"

export default function foodData({food,distance,pages,handleDistance}) {
    return (
        <div>
            
            {food.slice(distance.from,distance.to).map((data,index)=>{return (<FoodCardas key={index} data={data} />)}  )}
            {<PaginationBar size={Math.ceil(pages)} distance={distance} handleDistance={handleDistance} gap={distance.to-distance.from}  />}
        </div>
    )
}


/*{food.length<distance.to?handleDistance({from:distance.from,to:food.length}):null} */