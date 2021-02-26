import React from 'react'
import styles from "../css/down.module.css"
import { Link } from "gatsby"
export default function down() {
    return (
        <div>
        <ul className={styles.down}>  
        <Link to="/nutrition" activeClassName={styles.active} style={{ textDecoration: 'none' }} >
        <li className={styles.list} >NUTRITION</li>
        </Link>
        <Link to="/workout" activeClassName={styles.active} style={{ textDecoration: 'none' }} >
        <li  className={styles.list}>WORKOUT</li>
        </Link>
        <Link to="/about" activeClassName={styles.active} style={{ textDecoration: 'none' }} >
        <li className={styles.list}>ABOUT US</li>
        </Link>
        </ul> 
        </div>
    )
}
