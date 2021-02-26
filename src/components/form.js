import React from 'react'
import Styles from "../css/form.module.css"
import emailjs from "emailjs-com"

export default function form() {
    function sendEmail(e){
        e.preventDefault();
     let checkboxes =e.target.querySelectorAll('[type="checkbox"]')
      
      if(checkboxes[0].checked || checkboxes[1].checked)
      {
        emailjs.sendForm('service_mlr108a', 'template_hyhfqtt', e.target,"user_zrABCDNuTD35rDwGPWJpf")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert("sent")
          e.target.reset()
        }
        else
        {
            alert("you have to select atleast one")
        }
    }


    return (
        <form  onSubmit={sendEmail} className={Styles.form} >
        <div className="wra">
        
         <input placeholder="Name" type="text" id="name" name="name" pattern="^[A-Z]{1}[a-z]{2,15}" title="Need real name" />
         </div>
         <div className="wra">
        
         <input placeholder="Email" type="text" id="name"  name="email"  pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b"/>
         </div>
         <div className="wra">                                             
         
         <input placeholder="Number" type="text" id="name"  name="number"  pattern="\+370[0-9]{8}" title="format +37066666666"/>
         </div>
         <div className={Styles.check}>
         <div>
         <label htmlFor="food">Nutrition: </label>
         <input type="checkbox" id="food" name="food" value="food" />
         </div>
         <div>
         <label htmlFor="workout">Workout: </label>
         <input type="checkbox" id="workout"   name="workout" value="workout"/>
         </div>
         </div> 
         <div className={Styles.button}>
         <input type="submit" value="Submit"/>
         </div>
        </form>
    )
}

