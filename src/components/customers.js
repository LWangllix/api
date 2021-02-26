import React from 'react'
import Customer from "./customer"
import Styles from "../css/customers.module.css"
export default function customers() {
    return (
         <div className={Styles.fullCard}>
        <div className={Styles.name}>
        <p>CUSTOMER REVIEWS</p>
        </div>
        <div className={Styles.custsCard}>
            {[0,1,2].map(e=><Customer key={e}/>)}
        </div>
        </div>
    )
}
