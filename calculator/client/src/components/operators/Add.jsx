import React from 'react'
import {Button} from "reactstrap"
export default function Add(props) {
  return (
    <div id='add'>
      <Button onClick={() => {
        console.log(props.inputArray)}
        } className='btn'>+</Button>
    </div>
  )
}
