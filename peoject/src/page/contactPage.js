import { useState } from "react";
import "../ContactPageStyles.css"
import ContactPhoneSize from "./contactPhoneSize";
import ContactTabSize from "./contactTabSize";



function Contact() {
  const [formData,setFormData] = useState([])
console.log(formData,"sss")
    return (
     <>
       <ContactTabSize formData={formData} setFormData={setFormData}/>
       <ContactPhoneSize/>
     </>
    )
};

export default Contact;
