import React, {useEffect} from 'react'
import styles from "../css/specialist.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Specialist(specialist) {
      
    useEffect(() => {
      Aos.init({duration: 2000})
    }, [])


    return (
    
        <div data-aos="fade-up" className={styles.card}>
        <div className={styles.picture} >
            <img src={specialist.specialist.picture} alt={specialist.specialist.alt}/>
        </div>
        <div className={styles.SpecialistName}>{specialist.specialist.Name}</div>
        <ul className={styles.description}>
            <li>{specialist.specialist.Expierence}</li>
            <li>{specialist.specialist.Description}</li>
        </ul>

        </div>
    )
}
