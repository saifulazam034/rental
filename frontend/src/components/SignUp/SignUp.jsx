import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./SignUp.css"
const SignUp = () => {
    const[Name,SetName]=useState("");
    const[Email,SetEmail]=useState("");
    const[password,SetPassword]=useState("");
    const Navigate =useNavigate();
    useEffect(()=>{
      const auth =localStorage.getItem('users')
      if(auth){
        Navigate('/')
      }
    })




    const collectData = async ()=> {
        console.warn(Name, Email, password);
        let result = await fetch("http://localhost:5000/users",{
          method: 'Post',
        body: JSON.stringify({Name,Email,password }),
        headers:{
          'Constent-Type':'application/JSON'
        },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("users",JSON.stringify(result));
        Navigate('/')
      
      }
  return (
    <div className="signup">
      <h1>LogIn</h1> 
      <input className="inputbox" type="text"
      value={Name} onChange={(e)=>SetName(e.target.value)} placeholder="Enter your Name"/>
      <input className="inputbox" type="text" 
       value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Enter your Email"/>
      <input className="inputbox" type="password" 
       value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder="Enter your Password"/>
      < button  onClick={collectData}className="appbutton" type="button"><h4>LogIn</h4></button>
    </div>
  )
}

export default SignUp
