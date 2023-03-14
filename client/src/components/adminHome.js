import React, { Component, useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminHome({ userData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    fetch("http://localhost:8000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:8000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  return (

    <div className="auth-wrapper">
      <div className="clsone">
            <div className="left">
            <a href="/stuList" className="py-2 btn btn-light font-weight-bold">
                 STUDENT DETAILS LIST
            </a>
        <br/>
        <br/>
            <a href="/stuDetails" className="py-2 btn btn-light font-weight-bold">
             ADD NEW DETAILS
            </a>
           
             </div>
            
       </div>
    </div>
  );
}

