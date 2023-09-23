import GlowEffect from "../components/GlowEffect";
import Footer from "../components/Footer";
import Star from "../components/star";
import StarPu from "../components/StarPu";
import {useState} from "react"


function ContactPhoneSize() {
    //phone size variable
    const [team,setTeam] = useState();
    const [topic,setTopic] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();
// kenny use this variable to where it belong
    console.log(team,topic,email,message)

    return (
        <div className="contactPhoneSize">
            <Star top={5} left={17} />
            <StarPu top={2} left={10} width={1} height={1} />

            <Star bottom={6} right={-1.8} />
            <StarPu bottom={4} left={0} width={1} height={1} />

            <div className="icon_group1">
              <img src="/close.png" alt=""></img>
            </div>

            <div className="QandA">
                <div>Questions or need</div>
                <div>assistance?</div>
                <div>Let us know about it</div>
            </div>

            <p className="mailUs_text">
                Email us below to any question related 
                to our event
            </p>

            
            <form className="contact_form">
                <input type="text" onChange={(e)=>setTeam(e.target.value)} className="contact_sm" placeholder="Team's Name" />
                <input type="text" onChange={(e)=>setTopic(e.target.value)} className="contact_sm" placeholder="Topic"/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} className="contact_sm" placeholder="Email"/>
                <textarea className="textarea" onChange={(e)=>setMessage(e.target.value)} placeholder="Message" style={{padding:"1rem"}}></textarea>
                <button className="btn_contact">Submit</button>            
            </form>
                <Footer/>
                {/* <footer className="footer">
                  <div>Share on</div>
                  <div className="icon_share">
                  <IconShare/>
                  </div>
                </footer>  */}

                <GlowEffect top ={3} left={0} />
        </div>
    )
};

export default ContactPhoneSize;