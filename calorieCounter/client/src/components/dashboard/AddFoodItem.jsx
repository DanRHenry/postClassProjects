import {React, useRef, useState} from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

export default function AddFoodItem(props) {
  const creatorNameRef = "";
  const foodNameRef = useRef();
  const mealCategoryRef = useRef();
  const unitRef = useRef();
  const quantityRef = useRef();
  const caloriesRef = useRef();
  const mealTypeRef = useRef();
  const [formInputFields, setFormInputFields] = useState();
  const userEmail = props.information.email;

  let day = props.day;
  if (props.day < 10) {
    day = `0${props.day}`
  }

  //  --------------------- POST ----------------
  async function handleSubmit(e) {
    //* Stop the page from refreshing when the form submits
    e.preventDefault();

    //* Creating a variable that holds each input's ref value
    const creatorName = userEmail;
    const date = (props.year.toString() + props.month.toString() + day);
    // const creatorName = creatorNameRef.current.value;

    const foodName = foodNameRef.current.value;
    const mealCategory = "mealCategoryRef.current.value";
    const unit = unitRef.current.value;
    const quantity = quantityRef.current.value;
    const calories = caloriesRef.current.value;
    const mealType = "mealTypeRef.current.value";

    // setFormInputFields(
      

    // )
    //* The server expects json, we need to build and json-ify a user object to send to our server
    let newFoodObj = JSON.stringify({
      creatorName,
      date,
      foodName,
      mealCategory,
      unit,
      quantity,
      calories,
      mealType,
    });

    const url = "http://localhost:4300/food/storeFood";

    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    const requestOptions = {
      headers,
      body: newFoodObj,
      method: "POST",
    };

    // Use try/catch for our async fetch
    try {
      // Build an async fetch, fetch will use the url and requestOptions obj
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      //   console.log("data:", data);

      // If the server send a success message we can proceed

      if (data.message === "Success! Food Saved!") {
        // props.setFoodData();
        props.getFoodInformation();
        newFoodObj = {}
        // creatorNameRef.current.value = "";
        // const creatorName = userEmail.toString();
        foodNameRef.current.value = "";
        mealCategoryRef.current.value = "";
        unitRef.current.value = "";
        quantityRef.current.value = 0;
        caloriesRef.current.value = 0;
        mealTypeRef.current.value = "";
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div id="inputFormsAndButton">
      <Form onSubmit={handleSubmit}>
        <FormGroup
        className="inputFields"
        >
          <Input
            placeholder="Food Name"
            innerRef={foodNameRef}
            type="text"
            autoComplete="off"
          />
          <Input
            placeholder="Unit"
            innerRef={unitRef}
            type="text"
            autoComplete="off"
          />
          <Input
            placeholder="Quantity"
            innerRef={quantityRef}
            type="number"
            autoComplete="off"
          />
          <Input
            placeholder="Calories"
            innerRef={caloriesRef}
            type="number"
            autoComplete="off"
          />
        </FormGroup>
      </Form>
      <Button id="submit" onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
