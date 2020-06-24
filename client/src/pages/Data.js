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

  function makeChartData() {
    let x = [];
    let y = [];
    for (let i = 0; i < dataState.length; i++) {
      x.push(dataState[i].id);
      y.push(dataState[i].stress);
    }

    let data = {
      datasets: [
        {
          label: "Stress",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: y,
        },
      ],
      labels: x,
    };
    return data;
  }

  function loadData() {
    console.log("worked");
    API.getData(1).then((res) => {
      console.log(res.data);
      dataStateDispatch(res.data);
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">toggle</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Line
              data={dataState.length > 0 ? makeChartData() : null}
              options={{
                title: {
                  display: true,
                  text: "Stress",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
