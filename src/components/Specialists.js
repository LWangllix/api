import React from 'react'
import style from "../css/specialists.module.css"
import Specialist from './specialist'
export default function Specialists({specialists, title}) {

    specialists=specialists.slice(0,3)
    return (
        
    <div>
         <h1 className={style.heading}>OUR {title} SPECIALIST</h1>
        <div className={style.specialists}>
            
            {specialists.map(({ node }, index)=>{
                return <Specialist key={index} specialist={node}/>})}
        </div>

        </div>
    )
}
