import React, { useState } from "react";
//css
import "../../assets/css/UserDash.css";
import Button from "react-bootstrap/Button"
import Axios from "axios"

const UserDashboard = () => {
  const [userName,setUsername]=useState([])
  const [userid,setUserid]=useState([])

  Axios.get("http://localhost:3001/login/usr").then(
    (response) => {
      //console.log(response.data);
      setUsername(response.data.name);
      setUserid(response.data.id);
      console.log(response.data);
      
    })
  //donate function
  const donate = () => {
    alert("WE WILL GET IN TOUCH WITH YOU!");
  };

  const request =()=>{
      window.location='/request'
  }

  // const update=()=>{
    
  // }

  return (
  
    <div className="full mt-5">
      <h3 className="text-center">Welcome, {userName}!</h3>
      <p className="pos1 fst-italic fw-bold">Please Note Your User ID<br></br> User ID: {userid}</p>
      <div className="user-dash">
      <Button variant="warning" onClick={donate}>DONATE</Button>
      <Button variant="warning" onClick={request}>REQUEST</Button>
      </div>
      {/* <button on onClick={update}>UPDATE</button> */}
    </div>
  );
};
export default UserDashboard;
