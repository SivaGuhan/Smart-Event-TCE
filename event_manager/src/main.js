import React from "react";
import './main.css';
import ClgLo from './images/logo.png'

function Main(){
    return(
        <div>
            <div className="header">
                <img id='lo' src={ClgLo} alt=''/>
                <h1><b>TCE EVENTS</b></h1>
            </div><br></br>
            <div className="cursor-default">
                <span className="text-center">
                <h1 className="animate-pulse">Welcome</h1><br></br>
                </span>
            </div>
            <div className="welcome">
            <form className='form'>
                <br></br>
                <p><b>Login</b></p>
                <br></br>
                <div className="in">
                    <input type="email" id="email" autoComplete='off' placeholder="Username"></input>
                </div><br></br>
                <div className="in">
                    <input type="password" id="pass" autoComplete='off' placeholder="Password"></input>
                </div><br></br>
                 <button type="submit">Submit</button><br></br>
                 <p>New User?? <a href='./'><u>Click here</u></a> to register</p>
            </form>
            </div>
        </div>
    )
}

export default Main;