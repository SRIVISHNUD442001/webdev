import React, { useState } from "react";
import './App.css'
function Form(props)
{
    function g(event){
        console.log(event.target.value);
        setname(event.target.value)
       
    }
    function p(event){
        console.log(event.target.value);
        naam(event.target.value)
       
    }
   
const [name,setname]=useState("");
const [ss,naam]=useState("");
    return(
        <div className="footer">
        <form className="form">
        <h1>hi {name} {ss}</h1>
            <input onChange={g} type="text" id="name" placeholder="NAME"></input>
            <input onChange={p} type="text" id="pas" placeholder="password"></input>
            {props.sig ==true ? <button type="submit" >signin</button>:<div>
            <input type="password" placeholder="re enter password"></input>
            <button  type="submit">register</button>
           
            </div>
            
            }
        </form>
        </div>
        
    );
  
   
}
export default Form;