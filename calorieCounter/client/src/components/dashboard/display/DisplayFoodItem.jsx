//!https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/reactjs#
import { React, useRef } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { baseurl } from "../../../helpers/url";
export default function DisplayFoodItem(props) {

const setUnitEdit = () => {
  props.setUnitEditCheck(props.unitID);
}

  return (
    <>
            <td className="tableItems tableItemUnit" id={props.unitID} onClick={setUnitEdit}>{props.unit}</td>
    </>
  );
}
