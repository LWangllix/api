import React from 'react'
import Styles from "../css/Exercises.module.css"
import Exercise from "./Exercise"
export default function Exercises({Exercises}) {
    return (
        <div className={Styles.table}>
              {Exercises.map((exercise,index)=> {return (<Exercise key={index} Exercise={exercise}/>)})}
        </div>
    )
}
