import React, { Component, useEffect, useState } from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="auth-wrapper">
      
        <div>
        <table>
             <tr> 
                 <td><h2>Name</h2></td>
                 <td> <h4>{userData.fname}</h4> </td>
             </tr>
             <tr> 
                 <td><h2>Email </h2></td>
                 <td><h4>{userData.email}</h4></td>
             </tr>
             
        </table>
           <input type="button" value="LOGOUT" onClick={logOut} className="signi flex-parent jc-center" />
          
      </div>
    </div>
  );
}
