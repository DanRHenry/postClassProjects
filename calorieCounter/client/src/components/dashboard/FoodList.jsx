import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import AddFoodItem from "./AddFoodItem";
import {Button} from "reactstrap";

// import { useParams, useNavigate } from "react-router-dom";

export default function FoodList(props) {
  let tempColorValue = "greyRow";
  
  
  const [foodData, setFoodData] = useState();
//   let [day, setDay] = useState(props.day)
let day = props.day;
  
  //   const id = useParams();

  //   --------------------- GET -----------------

  let getFoodInformation = async function () {
    const reqOptions = {
      method: "GET",
      headers: new Headers({}),
    };
    let url = `http://localhost:4300/food/`;
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      if (data.message === "All Food Items:") {
        setFoodData(data.getAllFoodItems);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (tempColorValue === "greyRow") {
      tempColorValue = "whiteRow";
    } else {
      tempColorValue = "greyRow";
    }
  });

  useEffect(() => {
    getFoodInformation();
  }, []);
  
  let displayFoodItems = () =>
    foodData?.map((item) => {
        if (day < 10) {
            // setDay(`0${props.day}`);
            day = `0${props.day}`;
          }
      if (item.date === props.year.toString() + props.month.toString() + day) {
        let foodName = item.foodName;
        let mealCategory = item.mealCategory;
        let unit = item.unit;
        let quantity = item.quantity;
        let calories = item.calories;
        let mealType = item.mealType;
        let totalCalories = quantity * calories;
        return (
          <tr key={foodData.indexOf(item)}>
            <td>{foodName}</td>
            <td>{quantity}</td>
            <td>{unit}</td>
            <td>{calories}</td>
            <td>{totalCalories}</td>
          </tr>
        );
      }
    });

    const calendar = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    let year = 2004
    console.log(2002 % 4)
    let prevDay = () => {
        if (day > 0) {
            day = props.day -1;
        } else {
            if (props.month > 0);
            {
                const month = props.month -1;    
                if (props.year % 4 != 0) {
                    day = calendar.month-1;
                } else {
                    if (month +1 === 2) {
                        day = (calendar.month +1);
                    }
                }
            }
            
            console.log(day)
        }
    }
    const nextDay = () => {
        getFoodInformation()
    }
  return (
    <>
      <AddFoodItem
        information={props.information}
        day={props.day}
        month={props.month}
        year={props.year}
        setFoodData={setFoodData}
        getFoodInformation={getFoodInformation}
      />
      <Button onClick={prevDay}>Prev</Button>
      <Button onClick={nextDay}>Next</Button>
      <Table>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Calories Per</th>
            <th>Total Calories</th>
          </tr>
          <>{displayFoodItems()}</>
        </thead>
      </Table>
    </>
  );
}
