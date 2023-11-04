import React from "react";
import { Col, Container, Row, Button, Form, Table } from "reactstrap";
import { useState, useEffect } from "react";
import { useRef } from "react";
import FoodList from "./FoodList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [information, setInformation] = useState({});
  const [enterFoodState, setEnterFoodState] = useState(false);

  const userData = {};

  const token = localStorage.getItem("token");
  let colorAssignment = 0;
  let tempColor;

  const getUserInformation = async () => {
    let url = "http://localhost:4300/user/find";
    const reqOptions = {
      method: "GET",
      headers: new Headers({
        Authorization: token,
      }),
    };

    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      let firstName = data.findUser.firstName;
      let lastName = data.findUser.lastName;
      let age = data.findUser.age;
      let email = data.findUser.email;
      let feet = data.findUser.feet;
      let inches = data.findUser.inches;
      let weight = data.findUser.weight;
      let maintain = data.findUser.maintain;
      userData.firstName = firstName;
      userData.lastName = lastName;
      userData.age = age;
      userData.email = email;
      userData.feet = feet;
      userData.inches = inches;
      userData.weight = weight;
      userData.maintain = maintain;
      setInformation(userData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Add table striping
  if (colorAssignment === 0) {
    tempColor = "table-success";
    colorAssignment = 1;
  } else {
    tempColor = "table-secondary";
    colorAssignment = 0;
  }



return(
  <>
  <Container>
    <Row className="row">
      <Col m="auto" className="bg-light border">
        Date: {`${month}/${day}/${year}`}
      </Col>
      <Col m="auto" className="bg-light border">
        Weight: {`${information?.weight}`}
      </Col>
      <Col m="auto" className="bg-light border">
        Maintain: {`${information?.maintain}`}
      </Col>
      <Col m="auto" className="bg-light border">
        Lose 1 lb/week: {`${information?.maintain - 500}`}
      </Col>
      <Col m="auto" className="bg-light border">
        Lose 2 lbs/week: {`${information?.maintain - 1000}`}
      </Col>
      <Col m="auto" className="bg-light border">
        Total Calories:
      </Col>
    </Row>
    <Row>
      <tr
      // key={props.filteredTransactions.indexOf(transaction)}
      >
        <td className={tempColor}>food items here</td>
      </tr>
    </Row>
  </Container>
  <Container>


    <FoodList 
    information = {information}
    day = {date.getDate()}
    month = {date.getMonth() + 1}
    year = {date.getFullYear()}
    />
  </Container>
  <Button className="bg-dark" onClick={setEnterFoodState}>
    Click
  </Button>
</>
  )
}
