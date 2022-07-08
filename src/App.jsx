import React from 'react';
import { useState } from 'react';

const App = () =>{
const [name,setName] = useState(" ");
const[fullName,setFullName] = useState ();
    const inputEvent = (event) =>{
// console.log(event.target.value);
setName(event.target.value);

    }

    const onSubmits = () =>{
setFullName(name );
    }
    return(
        <>
            <div className="loginFrom-wrapper">
            <h1> Login Form </h1>
            <div className="loginForm-inner">
            <h3>Hello ..! {fullName}</h3>

                <input type="text" placeholder='Enter Your Name'  onChange={inputEvent} value = {name} />

              
            </div>
            <button className="jfss-btn" onClick={onSubmits}> Click Me </button>
            </div>


        </>
    )
}

export default App;