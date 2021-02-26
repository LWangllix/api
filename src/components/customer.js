import React from 'react'
import Styles from "../css/customer.module.css"
import chad from "../../static/75540030_573950083414404_4714600165053300736_n.png"
export default function customer() {
    return (
        
            <div className={Styles.card}>
           <div className={Styles.top}>
            <p>Best desicion in my life</p>
           </div>
           <div className={Styles.img}>
               <img src={chad} alt="customer"/>
           </div>
           <div className={Styles.bottom}>
           <p>- Jeffri 27</p>
           </div>

            </div>
            
        
    )
}
