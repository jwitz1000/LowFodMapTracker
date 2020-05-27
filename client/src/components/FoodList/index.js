import React, { useState } from "react";

const FoodList = (props) => {
  return (
    <div>
      <h1>Foods</h1>
      <ul className="list-group payer-list">
        {props.foods
          ? props.foods[0].map((food) => {
              return (
                <li key={food.id}>
                  <span>{food.label}</span>
                </li>
              );
            })
          : null}
      </ul>
      <li className="list-group-item">
        <form onSubmit="">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Payer Name"
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
