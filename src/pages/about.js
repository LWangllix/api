import React,{useState,useEffect} from 'react'
import Customers from "../components/customers"
import Navbar from "../components/navbar"
import Arrow from "../components/arrow"
import Footer from "../components/footer"
import Styles from "../css/about.module.css"
export default function About() {

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
           <div className={Styles.About}>
               <h2>About Us</h2>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel sodales turpis. Nu
               nc consectetur mauris id metus rutrum fermentum. Nunc bibendum nulla quis est vulputate al
               iquet. Duis et dui non sem dapibus blandit. Mauris consequat arcu vel dapibus gravida. Maec
               enas pulvinar metus sit amet condimentum ornare. Donec a cursus magna, sit amet tristique vel
               it. Fusce enim turpis, sollicitudin id metus id, hendrerit dignissim velit.
               </p>
           </div>
           </div>
           {up &&  <div aria-hidden="true" onClick={()=>scroll()}><Arrow/></div> }
           <Footer/>
        </div>

        
    )
}
