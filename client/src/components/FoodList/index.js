import React, { useState, useRef, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";

const FoodList = (props) => {
  const date = moment().format("YYYY-MM-DD");

  const [foodState, foodStateDispatch] = useState({
    foods: [],
  });
  const [foodSummaryState, foodSummaryStateDispatch] = useState({});

  const foodInput = useRef();

  // load food summary
  useEffect(() => {
    loadFoodSummary();
  }, []);

  // checks to see if there is a food summary for given day, if so, set the state of food summary and foods
  function loadFoodSummary() {
    API.getFoodSummary(date + "T00:00:00.000Z").then((res) => {
      console.log(res);
      if (res.data.length > 0) {
        foodSummaryStateDispatch({
          id: res.data[0].id,
        });
        foodStateDispatch({
          foods: res.data[0].Food,
        });
      }
    });
  }

  function addFood(e) {
    e.preventDefault();

    if (!foodSummaryState.id) {
      API.createFoodSummary({ createdDate: date + "T00:00:00.000Z" }).then(
        (results) => {
          foodSummaryStateDispatch({
            id: results.data.id,
          });

          API.addFood({
            label: foodInput.current.value,
            allowed: true,
            FoodSummaryId: results.data.id,
          })
            .then((results) => {
              console.log(results);
              foodStateDispatch((prevState) => ({
                foods: [...prevState.foods, results.data],
              }));
              console.log(foodState.foods);
              foodInput.current.value = "";
            })
            .catch((err) => console.log(err));
        }
      );
    } else {
      API.addFood({
        label: foodInput.current.value,
        allowed: true,
        FoodSummaryId: foodSummaryState.id,
      })
        .then((results) => {
          console.log(results);
          foodStateDispatch((prevState) => {
            return { foods: [...prevState.foods, results.data] };
          });
          foodInput.current.value = "";
          console.log(foodState);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <h1>Foods</h1>
      <ul className="list-group payer-list">
        {foodState.foods.length > 0
          ? foodState.foods.map((food) => {
              return (
                <li key={food.id}>
                  <span>{food.label}</span>
                </li>
              );
            })
          : null}
      </ul>
      <li className="list-group-item">
        <form onSubmit={addFood}>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Food Label"
            ref={foodInput}
          />
          <button type="submit" className="btn btn-sm btn-dark mt-1">
            <i className="fas fa-plus"></i>&nbsp; Add
          </button>
        </form>
      </li>
    </div>
  );
};

export default FoodList;
