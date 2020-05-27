import React, { useState, useEffect } from "react";
import API from "../utils/API";
import moment from "moment";
import FoodList from "../components/FoodList";
import StatsForm from "../components/Form/Stats";

const Dashboard = (props) => {
  // const [foodState, foodStateDispatch] = useState({});

  // useEffect(() => {
  //   loadFoods();
  // }, []);

  // function loadFoods() {
  //   API.getFoods().then((res) => {
  //     foodStateDispatch({
  //       foods: [res.data],
  //     });
  //     console.log(res);
  //   });
  // }

  return (
    <div>
      <div className="container mt-5 clearfix">
        <div className="row">
          <div className="col-md-6">
            <FoodList />
          </div>
          <div className="col-md-6">
            <StatsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
