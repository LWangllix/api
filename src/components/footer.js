import React from 'react'
import Styles from "../css/footer.module.css"

export default function footer() {

    

    return (
        <div className={Styles.footer}>

        <p> &copy; {new Date().getFullYear()} GLIXWORK</p>
        <div>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
        </div>

        </div>
    )
}
