import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
     
   <div>

   <nav class="navbar navbar-expand-lg navbar-dark bg-success navbar-fixed-top">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">
        <img href="/sign-in" src="/logo2.png" width="30" height="30" alt="" />
      </a>

    <a class="navbar-brand" href="/sign-in">STUDENT MANAGEMENT</a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon">
      
      </span>

    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/sign-up">SIGNUP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/sign-in">LOGIN</a>
        </li>
      
      </ul>
  </div>
  </div>
</nav>

</div>

 );
}

