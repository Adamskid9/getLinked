import Button from "../components/btn";
import Footer from "../components/Footer";
import GlowEffect from "../components/GlowEffect";
import { useState } from "react";


function ContactTabSize({formData,setFormData}) {
    
    const [team,setTeam] = useState("");
    const [topic,setTopic] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    // storing all data into and array of object


    console.log(team,topic,email,message)
    return (
        <div className="contactTabSize">
            <GlowEffect bottom={0} right={3}/>
            <GlowEffect bottom={5} right={5}/>
          
            <header>
                
                <h2 className="linked">get<span className="linked_s">linked</span></h2>
                <ul className="item">
                    <li className="list">Timeline</li>
                    <li className="list">Overview</li>
                    <li className="list">FAQs</li>
                    <li className="list">Contact Us</li>                        
                </ul>
                <Button name="Register" style={{width:"120px",fontSize:"15px",marginLeft:"10px"}} />
            </header>

            <main className="main">
                <GlowEffect top={8} left={100} />
                <GlowEffect top={15} left={80} />
                <GlowEffect top={12} left={80} />
                
                 <div className="main-getTouch">
                    <h2 className="main-getIn">Get in touch</h2>
                    <div className="main-info">Contact<br/>Infotmation</div>
                    <div className="main-address">
                        <div>27,Alara street</div>
                        <div>Yaba 100012</div>
                        <div>Lagos State</div>
                    </div>
                    <div className="main-call">Call Us : 07067981819</div>
                    <div className="main-open">
                        <div>We are open from Monday-Friday</div>
                        <div>08:00am - 05:00pm</div>
                    </div>
                    <Footer/>
                    
                    
                 </div>

                 <div className="main-QandA">
                     <div className="main_text">
                        <h3>Question or need assistance</h3>
                        <h3>Let us know about it</h3>
                     </div>
                     <form className="main_QandA_form">
                        <input className="contact_bg" onChange={(e)=>setTeam(e.target.value)} placeholder={"Team's Name"}/>
                        <input className="contact_bg" onChange={(e)=>setTopic(e.target.value)} placeholder={"Topic"}/>
                        <input className="contact_bg" onChange={(e)=>setEmail(e.target.value)} placeholder={"Email"}/>
                        <textarea className="textarea" onChange={(e)=>setMessage(e.target.value)} placeholder="Message" style={{padding:"1rem"}}></textarea>
                        <Button name="Submit" style={{marginTop:"1rem"
                        ,alignSelf:"center",width:"9rem",
                        borderRadius:"4px",padding:"10px" }}/>

                     
                     </form>
                     
                 </div>      
            </main>
            
        </div>
    )
};

export default ContactTabSize
