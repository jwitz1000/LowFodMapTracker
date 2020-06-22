import React, { useState, useEffect } from "react";
import API from "../utils/API";
import moment from "moment";
import FoodList from "../components/FoodList";
import StatsForm from "../components/Form/Stats";
import SideBar from "../components/SideBar";

const Dashboard = (props) => {
  const date = moment().format("MMM Do YYYY");

  return (
    <div>
      <div className="container mt-5 clearfix">
        <div className="mb-4 date-title">
          <h2>Today, {date}</h2>
        </div>
        <div className="container">
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
    </div>
  );
};

export default Dashboard;
