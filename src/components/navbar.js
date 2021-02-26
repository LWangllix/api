import React, {useState} from 'react'
import styles from "../css/navbar.module.css"
import Down from "./down"
import { Link } from "gatsby"
export default function Navbar() {

    const [down,setDown]=useState(false);


    const handleDown = () =>{
        setDown(!down)
    }

    return (
        <nav className={styles.bar}>
        <div className={styles.navi}>
        <Link to="/"  style={{ textDecoration: 'none' }} >
        <p  className={styles.p}>GLIXWORK</p> 
        </Link>
        <ul className={styles.ulli}> 
        <Link to="/nutrition" activeClassName={styles.active} style={{ textDecoration: 'none' }} >
        <li className={styles.list}>NUTRITION</li>
        </Link> 
        <Link to="/workout" activeClassName={styles.active} style={{ textDecoration: 'none' }} >
        <li className={styles.list}>WORKOUT</li>
        </Link>
        <Link to="/about" activeClassName={styles.active} style={{ textDecoration: 'none' }} >
        <li className={styles.list}>ABOUT US</li>
        </Link>
        </ul>
        <div className={styles.responsive} aria-hidden="true" onClick={handleDown}>
           <div></div>
           <div></div>
           <div></div>
        </div>
        </div>
        {down &&  <Down/> }
        </nav>
    )
}
