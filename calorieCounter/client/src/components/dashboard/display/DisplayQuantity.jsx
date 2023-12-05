//!https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/reactjs#
import { React, useRef } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { baseurl } from "../../../helpers/url";
export default function DisplayQuantity(props) {
const setFoodEdit = () => {
  props.setFoodItemEditCheck(props.foodID);
}
const setQuantityEdit = () => {
  props.setQuantityEditCheck(props.quantityID);
}

const setUnitEdit = () => {
  console.log("props:",props)
  console.log("props.setUnitEditCheck:",props.setUnitEditCheck)
  props.setUnitEditCheck(props.unitID);
}

const setCalorieEdit = () => {
  props.setCalorieEditCheck(props.caloriesID);
}

  return (
    <>
            <tr className="tableItems tableContainer" key={props.foodData.indexOf(props.item)}>
            <td className="tableItems tableItemName" id={props.foodID} onClick={setFoodEdit}>{props.foodName}</td>
            <td className="tableItems tableItemQuantity" id={props.quantityID} onClick={setQuantityEdit}>{props.quantity}</td>
            <td className="tableItems tableItemUnit" id={props.unitID} onClick={setUnitEdit}>{props.unit}</td>
            <td className="tableItems tableCalories" id={props.caloriesID} onClick={setCalorieEdit}>{props.calories}</td>
            {/* <td calendar>{calories}</td> */}
            <td className="tableItems tableTotalCalories">{props.totalCalories}</td>
          </tr>
    </>
  );
}
