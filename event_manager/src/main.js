import React from "react";
import './main.css';

function Main(){
    return(
        <div>
            <div className="header">
                <h1>TCE EVENTS</h1>
            </div>
            <h1>Welcome</h1>
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
                 <p>New User?? <a href='./'>Click here</a> to register</p>
            </form>
            </div>
        </div>
    )
}

export default Main;