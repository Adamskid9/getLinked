import { useEffect, useState } from "react";
import GlowEffect from "../components/GlowEffect";
import Select from "../components/Select";
import StarPu from "../components/StarPu";
import Button from "../components/btn";
import Input from "../components/input";
import Star from "../components/star";
import Header from "../components/SectionHeader";
import '../RegisterPage.css';
import Loader from "../components/loaderBtn";
import fetchCategories from "../components/PostReg";



const BASE_URL = 'https://backend.getlinked.ai';

function Register() {
const [dataR,setDataR] = useState([]);

const [teamR,setTeamR] = useState("");
const [topicR,setTopicR] = useState("");
const [emailR,setEmailR] = useState("");
const [phoneR,setPhoneR] = useState("");
const [catergory,setCatergory] = useState("");
const [group,setgroup] = useState("");

const [userData,setUserData] = useState([]);

const [loadBtn,setLoadBtn] = useState(false);
               

const check = function(e){
    e.preventDefault();
    if(teamR && topicR && emailR && phoneR){
    setUserData(cur=>[...cur,{teamR,topicR,emailR,phoneR}]);
    setLoadBtn(true);

    const user = {teamR,topicR,emailR,phoneR};
    fetchCategories(user);


 setTimeout(function(){
  setLoadBtn(false)
 },1000)

   }

    setTeamR("");
    setEmailR("");
    setPhoneR("");
    setTopicR("")
}

// this user data....u see it in console
// fill the form and submit then check console
console.log(userData);



useEffect(function(){
    async function Api(){
        try{
    const req = await fetch(`${BASE_URL}/hackathon/categories-list`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    
  if(!req.ok) throw new Error("something went wrong")
  const data = await req.json();
  setDataR(data);
  
        }catch(e){
        console.log(e.message,"error")
        }

    }
    Api();
},[]);


  function handleCatergory(e){
   setCatergory(e.target.value)
  };
  function handleGroup(e){
   setgroup(e.target.value)
  };
  function handleTeamR(e){
   setTeamR(e.target.value)
  };
  function handleTopicR(e){
   setTopicR(e.target.value)
  };
  function handleEmailR(e){
   setEmailR(e.target.value)
  };
  function handlePhoneR(e){
   setPhoneR(e.target.value)
  };




    return (
        <div className="register">

            <Header/>

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
                            <Input type={"text"} label={"Team's Name"} value={teamR} handle={handleTeamR} placeholder={"Enter the name of the group"}/>
                            <Input type={"number"} label={"Phone"}
                             placeholder={"Enter your phone number"}
                             value={phoneR}
                             handle={handlePhoneR}
                              clas={"marginLeft"} clas2={"clas2"}/>
                        </div>



                        <div className="form form_input">
                            <Input type={"email"} value={emailR} handle={handleEmailR} label={"Email"}  placeholder={"Enter your email address"}/>
                            <Input type={"text"} handle={handleTopicR} label={"Project Topic"}
                             placeholder={"What is your project topic"}
                             value={topicR}
                             clas={"marginLeft"} clas2={"clas2"} />
                        </div>



                        <div className="form select_input">
                           <Select text={"Category"} selectEle={handleCatergory} value={catergory}>
                            <option>select your catergory</option>
                            {dataR&&dataR.map(value=><option key={value.name} value={value.name} >{value.name}</option>)}
                           </Select>
                           <Select text={"Group size"} marginLeft={"marginLeft"} selectEle={handleGroup} value={group} >
                           <option value={"0-5"}>0-5</option>
                           <option value={"10-15"}>10-15</option>
                           <option value={"15-20"}>15-20</option>
                           </Select>
                        </div>


                          <div className="review">
                             Please review your registration details before submitting
                          </div>

                          <div className="policy">
                            <input type="checkbox"/>
                            <span style={{marginLeft:"5px"}}> I agreed with the event terms and conditions  and privacy policy</span>
                          </div>

                          <Button fontSize={"1.5"} text={"Register Now"} check={check} loading={loadBtn}>
                            <Loader/>
                          </Button>

                    </form>
 
                  

                </div>
            </div>


        </div>
    )
};


export default Register