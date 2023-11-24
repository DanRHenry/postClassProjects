import React from "react";
import { Container, Row, Col } from "reactstrap";
export default function FoodHeaders(props) {
  return (
    <>
      <Container>
        <Row className="row">
          <Col m="auto" className="bg-light border">
            Date: {`${props.month}/${props.day}/${props.year}`}
          </Col>
          <Col m="auto" className="bg-light border">
            Weight: {`${props.information?.weight}`}
          </Col>
          <Col m="auto" className="bg-light border">
            Maintain: {`${props.information?.maintain}`}
          </Col>
          <Col m="auto" className="bg-light border">
            Lose 1 lb/week: {`${props.information?.maintain - 500}`}
          </Col>
          <Col m="auto" className="bg-light border">
            Lose 2 lbs/week: {`${props.information?.maintain - 1000}`}
          </Col>
          <Col m="auto" className="bg-light border">
            Total Calories: {props.dailyCalories}
          </Col>
        </Row>
      </Container>
    </>
  );
}
