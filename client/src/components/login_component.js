import React, { Component, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:8000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }

  return (
      
    <div className="logcon">

    <section id="home">
   <div className="container siform" id="container">
        
        <div className="form-container sign-in-container">

             <form className="formover" onSubmit={handleSubmit}>

                <h1 className="colorh1">Login</h1>
              <div className="ima-container">
                    <a href="#">
                        <img src="/logo2.png" alt="" width="70" height="54" class="d-inline-block align-text-top">
                        </img>
                    </a>
                </div>
                <span>Use your account</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
                <button type="submit">LOGIN</button>
                
            </form>
           
        </div>


        <div className="overlay-container">

            <div className="overlay">
                <div className="overlay-panel overlay-left">  
                    <p>For admin login</p>
                    <button class="press" id="signIn">Admin Login</button>
                </div>
                
                <div className="overlay-panel overlay-right">
                 <p>
            Don't have an account?
            
          </p><br />
          <a href="/sign-up"><h3>Sign Up Here</h3></a>
                </div>

            </div> 
        </div>
   </div>
    
</section>
    </div>
  );
}
