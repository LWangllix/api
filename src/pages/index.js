import React, { useEffect, useState } from "react";
import Header from "../components/header";
import styles from "../css/index.module.css"
import Specialists from "../components/Specialists"
import Contact from "../components/contacts"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import Arrow from "../components/arrow"
export default function Home({ data }) {
  let nSpecialist = data.allMongodbHealthyLifestyleNutritionSpecialist.edges;
  let wSpecialist = data.allMongodbHealthyLifestyleWorkoutSpecialist.edges;

  const [up, setUp] = useState(false)

  const handleScroll = () => {


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

      <Header />

      <div className={styles.display}>
        <Specialists specialists={nSpecialist} title={"NUTRITION"} />
        <Specialists specialists={wSpecialist} title={"WORKOUT"} />
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
      {up && <div aria-hidden="true" onClick={() => scroll()}><Arrow /></div>}
      <Footer />
    </div>
  )
}

export const pageQuery = graphql
  `query  {
  allMongodbHealthyLifestyleNutritionSpecialist {
    edges {
      node {
        Description
        Expierence
        Name
        alt
        picture
      }
    }
  }
  allMongodbHealthyLifestyleWorkoutSpecialist {
    edges {
      node {
        Description
        Expierence
        Name
        alt
        picture
      }
    }
  }
}
`