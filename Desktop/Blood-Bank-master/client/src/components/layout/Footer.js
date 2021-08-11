import React from "react";
import Button from "react-bootstrap/Button"
import { Link, Route, Switch } from "react-router-dom";
import EmployeeLogin from "../employee/employeeLogin"
import Container from "react-bootstrap/esm/Container";
//css
import "../../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer p-5 d-flex justify-content-center">
      <Link to="/login/emp">
        <Button variant="primary">EMPLOYEE LOGIN</Button>
      </Link>
     
 
      {/* <Switch>
        <Route path="/login/emp" component={EmployeeLogin} />
      </Switch> */}
    </div>
  );
};

export default Footer;
