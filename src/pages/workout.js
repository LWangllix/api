import React, {useState, useEffect} from 'react'
import { graphql } from "gatsby"
import Exercises from "../components/Exercises"
import Navbar from '../components/navbar';
import Customers from '../components/customers';
import Styles from '../css/workout.module.css'
import Footer from "../components/footer"
import Arrow from '../components/arrow'
export default function Workout({data}) {

    let exercises=data.allMongodbHealthyLifestyleWorkoutExercises.edges;

    const [up, setUp]=useState(false)

    const handleScroll = ()=>{


      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          setUp(true)
        } else {
          setUp(false)
        }

   

      
  }

    function scroll() {
      window.scroll({
          top: 0,
          behavior: 'smooth'
        }); 
      }
  
      useEffect(() => {
          window.addEventListener('scroll', handleScroll);
      }, [])
    
    return (
        <div>
          
          <Navbar/>
          <div className={Styles.layout}>
          <div className={Styles.customer}><Customers  /></div>  
           <Exercises Exercises={exercises} />
           </div>
           {up &&  <div aria-hidden="true" onClick={()=>scroll()}><Arrow/></div> }
           <Footer/>
        </div>
    )
}

export const pageQuery = graphql
`query {
  allMongodbHealthyLifestyleWorkoutExercises {
    edges {
      node {
        url
        Name
        Steps
      }
    }
  }
}
`