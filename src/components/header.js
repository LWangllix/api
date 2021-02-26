import React from 'react'
import Navbar from './navbar'
import styles from "../css/header.module.css"
export default function header() {


    function scrollContact() {

        
        window.scrollTo({
            top: document.body.scrollHeight*0.8,
            left: 0,
            behavior: 'smooth'
          });


        }
    return (
        <header className={styles.header}>
            <Navbar/>
        <div className={styles.picture}>
         <div className={styles.card}>
            <h1>Want a perfect and suitable graph for nutrition, workout or both?</h1>
            <button onClick={()=>scrollContact()} className={styles.buttonn}>Contact us</button>
            </div>    
        </div>
        </header>
    )
}
