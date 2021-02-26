import React from 'react'
import Styles from "../css/paginationBar.module.css"

export default function paginationBar({size,distance, handleDistance, gap}) {
 function pages(){
     let a=[]
    for(let i=1;i<=size;i++)
    {
    if(distance.from===(i-1)*gap) 
    a.push(<button className={Styles.button1} key={i} onClick={()=>handleDistance({from:(i-1)*gap,to:i*gap}) }>{i}</button>) 
    else
    a.push(<button className={Styles.button} key={i} onClick={()=>handleDistance({from:(i-1)*gap,to:i*gap}) }>{i}</button>) 
    }
    return a;
 }
    return (
        <div className={Styles.buttons} >
        {pages()}
        </div>
    )
}
