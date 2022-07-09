import React from 'react';
import { useState } from 'react';

const App = () =>{
const [fullName,setfullName] = useState({
    fname :" ",
    lname: " ",
});
// const[fullName,setFullName] = useState ();
    const inputEvent = (event) =>{
// console.log(event.target.value);
// console.log (event.target.value);
// console.log(event.target.name);
const value = event.target.value;
const name = event.target.name;


setfullName((preValue) =>{

    console.log(preValue);

    return{
        ...preValue,
        [name]: value,
    }

    // if(name === 'fName'){
    //    return{
    //     fname: value,
    //     lname: preValue.lname,
    //     phone: preValue.phone,
    //     email: preValue.email,
    //    }
    // } 
    // else if(name === 'lName'){
    //     return{
    //      fname:  preValue.fname,
    //      lname:value,
    //      phone: preValue.phone,
    //      email: preValue.email,
    //     }
    //  }

    //  else if(name === 'phone'){
    //     return{
    //      fname:  preValue.fname,
    //      lname:preValue.lname,
    //      phone: value,
    //      email: preValue.email,
    //     }
    //  }

    //  else if(name === 'email'){
    //     return{
    //      fname:  preValue.fname,
    //      lname:preValue.lname,
    //      phone: preValue.phone,
    //      email: value,
    //     }
    //  }

})

    }

    const onSubmits = (event) =>{
        //refresh korbe na preventDefault
        event.preventDefault();                                                                                  
        // setFullName(name );
    }
    return(
        <>
            <div className="loginFrom-wrapper">
            <form action="" onSubmit={onSubmits}>
            <h1> Login Form </h1>

            <h3>Hello ..!  {fullName.fname}   {fullName.lname} </h3>
            
            <p> {fullName.phone}</p>
            <p> {fullName.email}</p>
            <div className="loginForm-inner">
          

                <input type="text"
                 placeholder='Enter Your First Name' 
                  onChange={inputEvent}
                //    value = {fullName.fname}
                    name ='fname' />
                <br />
                <input type="text"
                 placeholder='Enter Your Last Name' 
                  onChange={inputEvent}
                //    value = {fullName.lname}
                    name ='lname'  />
                <br/>

<input type="number"
                 placeholder='Enter Your Phone Name' 
                  onChange={inputEvent}
                //    value = {fullName.lname}
                    name ='phone'  />
    <br/>
<input type="email"
                 placeholder='Enter Your E-mail' 
                  onChange={inputEvent}
                //    value = {fullName.lname}
                    name ='email'  />

<br/>
            </div>
            <button className="jfss-btn" > Click Me </button>
            </form>
          
            </div>


        </>
    )
}

export default App;