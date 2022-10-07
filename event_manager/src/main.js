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
            
            <div className="welcome">
                <div class="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 rounded-3xl bg-white text-black shadow-xl">
                    <div class="flex flex-col items-center">
                        <input class="my-2 w-72 border p-2" type="email" placeholder="Username" />
                        <input class="my-2 w-72 border p-2" type="password" placeholder="Password" />
                    </div>
                    <div class="my-2 flex justify-center">
                        <button class="w-72 border bg-[#8B0000] text-white rounded-full p-2 font-sans">Login</button>
                    </div>
                    <h6>New User?</h6>
                    <div class="my-2 flex justify-center">
                        <button class="w-72 border bg-[#8B0000] text-white rounded-full p-2 font-sans">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;