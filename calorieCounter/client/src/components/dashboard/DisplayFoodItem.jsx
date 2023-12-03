//!https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/reactjs#
import { React, useRef } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { baseurl } from "../../helpers/url";
export default function DisplayFoodItem(props) {


  return (
    <>
            <tr className="tableItems tableContainer" key={props.foodData.indexOf(props.item)}>
            <td className="tableItems tableItemName" id={props.foodID} onClick={props.editFoodNames}>{props.foodName}</td>
            <td className="tableItems tableItemQuantity" id={props.quantityID} onClick={props.editQuantity}>{props.quantity}</td>
            <td className="tableItems tableItemUnit" id={props.unitID} onClick={props.editUnit}>{props.unit}</td>
            <td className="tableItems tableCalories" id={props.caloriesID} onClick={props.editCalories}>{props.calories}</td>
            {/* <td calendar>{calories}</td> */}
            <td className="tableItems tableTotalCalories">{props.totalCalories}</td>
          </tr>
    </>
  );
}
