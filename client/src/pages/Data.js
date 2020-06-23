import React, { useState, useRef, useEffect } from "react";
import API from "../utils/API";
import moment from "moment";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const Data = (props) => {
  const [dataState, dataStateDispatch] = useState({});

  // load data
  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    console.log("worked");
    API.getData(1).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Hours of sleep per day",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Data;
