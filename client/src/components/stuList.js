import React, { Component, useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function StuList({ stuData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllList();
  }, []);

  const getAllList = () => {
    fetch("http://localhost:8000/getAllList", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "stuData");
        setData(data.data);
      });
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  const deleteStu = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:8000/deleteStu", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          stuid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllList();
        });
    } else {
    }
  };

  return (
      <div className="auth-wrapper">
    
        <h3>Student List</h3>
        <table style={{ width: 900 }}>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Date of Birth</th>
            <th>Year</th>
            <th>Branch</th>
            <th>Mobile Number</th>
            <th>Delete</th>
          </tr>
          {data.map((i) => {
            return (
              <tr>
                <td>{i.sname}</td>
                <td>{i.roll}</td>
                <td>{i.dob}</td>
                <td>{i.year}</td>
                <td>{i.branch}</td>
                <td>{i.mnum}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteStu(i._id, i.sname)}
                  />
                </td>
              </tr>
            );
          })}
          
          
        </table>
        

        <a href="/adminHome" className="py-2 btn btn-light font-weight-bold">
             Back
            </a>
      
     </div>
  );
}

