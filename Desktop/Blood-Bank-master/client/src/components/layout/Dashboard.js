import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
//css
import "../../assets/css/Dashboard.css";

//background image
//import bfImg from '../../assets/img/bg.png'

const Dashboard = () => {
  //array of blood unit availbility
  const [bloodTable, setbloodTable] = useState([]);

  //useEffect call
  useEffect(() => {
    Axios.get("http://localhost:3001/home", (req, res) => {}).then(
      (response) => {
        //console.log(response.data);
        setbloodTable(response.data);
      }
    );
  });

  return (
    <div className="dashboard">
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.jainuniversity.ac.in/uploads/blog/1e47845a74d7a5c24cd6c0b7be23b4ee.jpg"
              alt="First slide"
              height="500px"
              width="1000px"
            />
            <Carousel.Caption className="text-white">
              <h6>Donate Blood. Save Lives</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.entertales.com/wp-content/uploads/Blood-Donation-9.jpg"
              alt="Second slide"
              height="500px"
              width="1000px"
            />
            <Carousel.Caption className="text-dark"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blog.khatriji.in/khatriji_files/uploads/2019/08/blood-donate-768x512.png"
              alt="Third slide"
              height="500px"
              width="1000px"
            />
            <Carousel.Caption className="text-dark"></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1 className="display-3 text-dark mt-5 text-center">BLOOD STOCK</h1>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>BLOOD TYPE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {bloodTable.map((val) => {
              return (
                <tr key={val.b_id}>
                  <td>{val.b_id}</td>
                  <td>{val.blood_group}</td>
                  <td>{val.unit}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Container fluid className="bg-dark" >
        <Footer />
      </Container>
    </div>
  );
};

export default Dashboard;
