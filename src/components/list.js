import React from 'react'
import Styles from  '../css/list.module.css'
export default function list({Steps}) {
    return (
        <div>
        <ul>
            {Steps.map(step=>{ return <li className={Styles.li} key={step}>{step}</li>})}
        </ul>
        </div>
    )
}
