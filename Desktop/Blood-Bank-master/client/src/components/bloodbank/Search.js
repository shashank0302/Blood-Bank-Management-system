import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
//css
import "../../assets/css/Search.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Search = () => {
  //variables
  var [place, setplace] = useState("");
  var [blood, setblood] = useState("");
  const [searchList, setsearchList] = useState([]);

  //search for blood
  useEffect(() => {
    Axios.post("http://localhost:3001/home/search", {
      place: place,
      blood: blood,
    }).then((response) => {
      if (response.data.message) {
        //alert(response.data.message);
      } else {
        setsearchList(response.data);
      }
    });
  });

  //returning
  return (
    <div className="search">
      {" "}
      <form>
        <input
          type="text"
          placeholder="SEARCH BY PLACE"
          name="place"
          onChange={(e) => {
            setplace(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder=" SEARCH BY BLOOD GROUP"
          name="bloodGroup"
          onChange={(e) => {
            setblood(e.target.value);
          }}
        />
        {/* <button onClick={()=>useEffect}><i className="fa fa-search"/></button> */}
      </form>

      {/* <Table className="blood-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone </th>
            <th>Place</th>
            <th>BloodGroup</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.userFName}</td>
                <td>{val.userPhone}</td>
                <td>{val.userPlace}</td>
                <td>{val.userBloodGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
      <Row className="g-2">
        {searchList.map((val, i) => {
          return (
            <Col>
              <Card>
                <Card.Body>
                <Card.Img variant="top" src="https://image.shutterstock.com/image-illustration/blood-donation-hands-grainy-textured-600w-566379469.jpg" width="200px" height="200px" />
                  
                  <Card.Title>
                    {i+1}. {val.userFName}
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      <p className="fst-italic">Phone: {val.userPhone}</p>
                      <p>Place: {val.userPlace}</p>
                      <p>BloodGroup: {val.userBloodGroup}</p>
                    </Card.Text>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Search;
