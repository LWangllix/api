import React, {useEffect} from 'react'
import styles from "../css/contacts.module.css"
import Form from "../components/form"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Contacts() {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])
    return (

        <div  data-aos="flip-right" className={styles.g} >
            <h2 className={styles.heading}>
                CONTACT US
            </h2>
            <p className={styles.paragraph}>
                fill in all the text fields and select the graph you want by checking checkboxes
           </p>
            <Form />

        </div>
    )
}
