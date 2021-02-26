import React from 'react'
import Styles from "../css/Exercise.module.css"
import List from "../components/list"
export default function Exercise({Exercise}) {
    console.log(Exercise)
    return (
        <div className={Styles.Card}>
        <img className={Styles.gif} src={Exercise.node.url} alt={Exercise.node.Name} />
        <div className={Styles.Name}>{Exercise.node.Name}</div>
        <div className={Styles.Description}><List Steps={Exercise.node.Steps}/></div>
        </div>
    )
}
