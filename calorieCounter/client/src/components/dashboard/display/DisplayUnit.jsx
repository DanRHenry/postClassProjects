//!https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/reactjs#
import { React, useRef } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { baseurl } from "../../../helpers/url";
export default function DisplayUnit(props) {
// const setFoodEdit = () => {
//   props.setFoodItemEditCheck(props.foodID);
// }
// const setQuantityEdit = () => {
//   props.setQuantityEditCheck(props.quantityID);
// }

const setUnitEdit = () => {
  props.setUnitEditCheck(props.unitID);
}

// const setCalorieEdit = () => {
//   props.setCalorieEditCheck(props.caloriesID);
// }

  return (
    <>
    <td>DisplayUnit</td>
            <td className="tableItems tableItemUnit" id={props.unitID} onClick={setUnitEdit}>{props.unit}</td>

    </>
  );
}
