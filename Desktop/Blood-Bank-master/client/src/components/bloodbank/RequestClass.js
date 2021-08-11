import React, { Component } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
// const array = [
//   {
//     value: "1",
//     label: "one",
//   },
//   {
//     value: "2",
//     label: "two",
//   },
//   {
//     value: "3",
//     label: "three",
//   },
// ];

export default class RequestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //number: -1,
      bloodGroup: [],
      req_blood: "A+ve",
      req_unit: 0,
      user_id:0
    };
    this.handleChange = this.handleChange.bind(this);
    this.request = this.request.bind(this);
    

  }

  componentDidMount() {
    this.setState({
      bloodGroup: [
        { id: "A+ve", label: "A+ve" },
        { id: "A-ve", label: "A-ve" },
        { id: "B+ve", label: "B+ve" },
        { id: "B-ve", label: "B-ve" },
        { id: "AB+ve", label: "AB+ve" },
        { id: "AB-ve", label: "AB-ve" },
        { id: "O+ve", label: "O+ve" },
        { id: "O-ve", label: "O-ve" },
        { id: "PNull", label: "PNull" },
      ],
    });
  }

  //
  handleChange = (e) => {
    this.setState({ req_blood: e.target.value }, () => {
      console.log("blood_requested : " + this.state.req_blood);
    });
  };

  updateUnit = (e) => {
    this.setState(
      {
        req_unit: e.target.value,
      },
      () => {
        console.log(this.state.req_unit);
      }
    );
  };
  userid= (e) =>{
    this.setState(
      {
        user_id:e.target.value,
      },
      ()=>{
        console.log(this.state.user_id);
      }
    )
  };

  request = () => {
    Axios.post("http://localhost:3001/request", {
      user_id:this.state.user_id,
      blood_group: this.state.req_blood,
      unit: this.state.req_unit,
    }).then((response)=>{
        if(response.data.message){
            alert(response.data.message)
        }
    });
  };

  // const [userName,setUsername]=useState([])
// reqid=()=>{



// }
  // Axios.get("http://localhost:3001/login/usr").then(
  //   (response) => {
  //     //console.log(response.data);
  //     setUsername(response.data);
  //     console.log(response.data);
      
  //   })

  render() {
    const { bloodGroup } = this.state;

    let bloodGroupList =
      bloodGroup.length > 0 &&
      bloodGroup.map((blood) => {
        return (
          <option key={blood.id} value={blood.id}>
            {blood.label}
          </option>
        );
      });

    return (
      <div className="request container">
        <h1>REQUEST FOR BLOOD</h1>
        <Form>
          <Form.Group className="my-5">
          <label>Select Blood Type</label>
          <Form.Select value={this.state.req_blood} onChange={this.handleChange}>
            {bloodGroupList}
          </Form.Select>
          </Form.Group>
          <Form.Group className="my-5">
            <label>Select Quantity</label>
          <Form.Control type="number" placeholder="UNIT" onChange={this.updateUnit} required />
          </Form.Group>
          <Form.Group className="my-5">
            <label>Enter UserID</label>
          <Form.Control type="text" placeholder="USER ID" onChange={this.userid} required/>
          </Form.Group>
        </Form>
        <Button className="mb-5" onClick={this.request}>REQUEST</Button>


        {/* <Button onClick={this.reqid}>Get Req ID</Button> */}
      </div>
    );
  }
}
