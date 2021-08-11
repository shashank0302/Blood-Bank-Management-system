import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import UserRegister from "../user/userRegister";
import UserLogin from "../user/userLogin";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//css
import "../../assets/css/Donate.css";

const Donate = () => {
  return (
    <div className="donate">
      <Row>
        <Col className="m-5 p-5 border_line">
          <h2>New to our Website? </h2>
          <p>register below!</p>
          <Link to="/reg/usr">
            <Button variant="primary">REGISTER</Button>
          </Link>
        </Col>
        <Col className="m-5 p-5">
          <h2>Already a Member?</h2>
          <p>Login Here!</p>
          <Link to="/login/usr">
            <Button variant="primary">LOGIN</Button>
          </Link>
        </Col>
      </Row>

      <Switch>
        <Route path="/reg/usr" component={UserRegister} />
        <Route path="/login/usr" component={UserLogin} />
      </Switch>
    </div>
  );
};

export default Donate;
