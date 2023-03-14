import React, { Component, useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "MahinthM07") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:8000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
     
    <div className="auth-wrapper">
      
        <form className="formsup" onSubmit={handleSubmit}>

          <h1>SIGN UP</h1>
          <div>
            <h3>Register As</h3>
            <label>
            <input
              type="radio"
              name="UserType"
              value="Student"
              required
              onChange={(e) => setUserType(e.target.value)}
            />
            Student
            </label>
            <label>
            <input
              type="radio"
              name="UserType"
              value="Admin"
              required
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
            </label>
          </div>
          {userType == "Admin" ? (
              <div>
               <label className="lab">Secret Key</label>
              
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                required
                onChange={(e) => setSecretKey(e.target.value)}
              />
             </div>
            
          ) : null}

           <label className="lab">First name</label> 
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required
              onChange={(e) => setFname(e.target.value)}
            />
            
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
           
            <label>Email address</label>
            
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
       
            <label>Password</label>
           
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
           
          <input type="submit" id="signi" value="SIGN UP" className="signi flex-parent jc-center" />
          
          </form>
          
          <h4 className="forgot-password text-right">
            Already registered ? <a href="/sign-in"><h5>Signin</h5></a>
          </h4>
       
      
    </div>
  );
}
