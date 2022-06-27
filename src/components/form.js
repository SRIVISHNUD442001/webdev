import React from "react";
import './App.css'
function Form(props)
{
    return(
        <div className="footer">
        <form className="form">
            <input type="text" id="name" placeholder="NAME"></input>
            <input type="password" id="pas" placeholder="password"></input>
            {props.sig ==true ? <button type="submit" onClick="p1()">signin</button>:<div>
            <input type="password" placeholder="re enter password"></input>
            <button type="submit">register</button>
           
            </div>
            
            }
        </form>
        </div>
        
    );
    function pl()
    {
        document.write(document.getElementById("#name").value);
    }
   
}
export default Form;