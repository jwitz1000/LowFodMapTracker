import React, { useState, useRef, useEffect } from "react";
import API from "../../utils/API";

const FoodList = (props) => {
  const [foodState, foodStateDispatch] = useState({});

  useEffect(() => {
    loadFoods();
  }, []);

  function loadFoods() {
    API.getFoods().then((res) => {
      foodStateDispatch({
        foods: [res.data],
      });
    });
  }

  const foodInput = useRef();

  function addFood(e) {
    e.preventDefault();
    API.addFood({
      label: foodInput.current.value,
      allowed: true,
    })
      .then((results) => {
        foodInput.current.value = "";
        foodStateDispatch({
          foods: [results.data],
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Foods</h1>
      <ul className="list-group payer-list">
        {foodState.foods
          ? foodState.foods[0].map((food) => {
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
            <i class="fas fa-plus"></i>&nbsp; Add
          </button>
        </form>
      </li>
    </div>
  );
};

export default FoodList;
