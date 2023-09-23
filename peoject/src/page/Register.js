import GlowEffect from "../components/GlowEffect";
import Select from "../components/Select";
import StarPu from "../components/StarPu";
import Button from "../components/button";
import Input from "../components/input";
import Star from "../components/star";


function Register() {
    return (
        <div className="register">
             <header className="reg_header">    
                <h2 className="getlinked">get<span className="getlinked_spa">linked</span></h2>
                <ul className="reg_item">
                    <li className="reg_list">Timeline</li>
                    <li className="reg_list">Overview</li>
                    <li className="reg_list">FAQs</li>
                    <li className="reg_list">Contact Us</li>                        
                </ul>
                <Button name="Register"></Button>
            </header>

            <div className="register_main">
                <Star right={23} top={3}/>
                <StarPu left={7}/>
                <Star bottom={3} left={5}/>
                <StarPu bottom={10} left={25}/>
                <GlowEffect top={0} />
                <GlowEffect top={3}  />
                <GlowEffect bottom={4} right={1}  />
                <GlowEffect bottom={0} right={1}  />
                
                <div className="reg_img">
                    <img src="/3d-person.png" className="imag" alt="walk"></img>
                </div>
                
                <div className="reg_container">
                    <form className="reg_form">
                        <p className="reg_text">Register</p>
                        <p className="part">Be part of this movement!</p>
                        <h3 className=" create_acc">CREATE YOUR ACCOUNT</h3>
                        <div className="form form_input">
                            <Input label={"Team's Name"} placeholder={"Enter the name of the group"}/>
                            <Input label={"Phone"}
                             placeholder={"Enter your phone number"}
                              clas={"marginLeft"} clas2={"clas2"}/>
                        </div>
                        <div className="form form_input">
                            <Input label={"Email"} placeholder={"Enter your email address"}/>
                            <Input label={"Project Topic"}
                             placeholder={"What is your project topic"}
                             clas={"marginLeft"} clas2={"clas2"} />
                        </div>
                        <div className="form select_input">
                           <Select text={"Category"}>
                            <option>Select your catergory</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Full stack</option>
                           </Select>
                           <Select text={"Group size"} marginLeft={"marginLeft"} >
                           <option>--Select--</option>
                           <option>0-5</option>
                           <option>10-15</option>
                           <option>15-20</option>
                           <option>20-30</option>
                           <option>30-45</option>
                           </Select>
                        </div>


                          <div className="review">
                             Please review your registration details before submitting
                          </div>

                          <div className="policy">
                            <input type="checkbox"/>
                            <span style={{marginLeft:"5px"}}> I agreed with the event terms and conditions  and privacy policy</span>
                          </div>

                          <Button name={"Register Now"}/>

                    </form>

                  

                </div>
            </div>


        </div>
    )
};


export default Register