import React from "react";
import { Button } from "reactstrap";
export default function Zero(props) {
  return (
    <Button onClick={() => {
        props.acceptInput(0)
    }} className='btn'>
      0
    </Button>
  );
}
