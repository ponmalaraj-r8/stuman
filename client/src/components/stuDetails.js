import React, { Component, useState } from "react";
            
export default function StuDetails() {
  const [sname, setSname] = useState("");
  const [roll, setRoll] = useState("");
  const [dob, setDob] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [mnum, setMnum] = useState("");

  const handleSubmit = (e) => {
      console.log(sname, roll, dob, year, branch, mnum);
      fetch("http://localhost:8000/stureg", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            sname,
            roll,
            dob,
            year,
            branch,
            mnum,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "stuRegister");
          if (data.status == "ok") {
            alert("Added");
          } else {
            alert("Something went wrong");
          }
        });
    
  };

  return (
    <div className="auth-wrapper">
      
        <form className="formsup" onSubmit={handleSubmit}>

          <h3>STUDENT DETAILS</h3>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setSname(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label>Roll Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Roll Number"
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Date of Birth</label>
            <input
              type="text"
              className="form-control"
              placeholder="Date of birth"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Year</label>
            <input
              type="text"
              className="form-control"
              placeholder="Year"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Branch</label>
            <input
              type="text"
              className="form-control"
              placeholder="Branch"
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              onChange={(e) => setMnum(e.target.value)}
            />
          </div>

          <div className="d-grid flex-parent jc-center">
          <input type="submit" id="signi" value="SUBMIT" class="signi" />
          </div>

        </form>
      <a href="/adminHome" className="py-2 btn btn-light font-weight-bold">
             Back
            </a>
    </div>
  );
}
