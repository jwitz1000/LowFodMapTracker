import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from "../../utils/API";
import moment from "moment";

const StatsForm = (props) => {
  const [formState, formStateDispatch] = useState({
    createdDate: moment().format("YYYY-MM-DD") + "T00:00:00.000Z",
    exist: false,
  });
  const date = moment().format("YYYY-MM-DD");

  // load health summary
  useEffect(() => {
    loadHealthSummary();
  }, []);

  // checks to see if there is a health summary for given day, if so, set the state of health summary and foods
  function loadHealthSummary() {
    API.getHealthSummary(date + "T00:00:00.000Z").then((res) => {
      console.log(res);
      if (res.data.length > 0) {
        formStateDispatch({
          ...formState,
          stats: res.data[0],
        });
      }
    });
  }

  function submitForm(e) {
    e.preventDefault();

    if (!formState.exist === true) {
      let data = {
        createdDate: formState.createdDate,
        stress: formState.stats.stress,
      };
      API.createHealthSummary(data).then((res) => {
        console.log(res);
        if (res.data) {
          formStateDispatch({
            ...formState,
            stats: res.data,
            exist: true,
          });
        }
      });
    } else {
      console.log(formState);
      let data = { stress: formState.stats.stress };
      console.log(data);
      API.updateHealthSummary(formState.stats.id, data).then((res) => {
        console.log(res.data);
        formStateDispatch({
          ...formState,
          stats: res.data,
        });
      });
    }
  }

  const handleChange = (event) => {
    let { name, value } = event.target;
    formStateDispatch({
      ...formState,
      stats: { ...formState.stats, [name]: value },
    });
  };

  return (
    <div>
      <h1>Stats</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="stress">stress</Label>
          <Input
            type="text"
            value={formState.stats ? formState.stats.stress : ""}
            name="stress"
            id="stress"
            placeholder="1,2,3"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sleep">sleep</Label>
          <Input
            type="text"
            value={formState.stats ? formState.stats.sleep : ""}
            name="sleep"
            id="sleep"
            placeholder="1,2,3"
            onChange={handleChange}
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default StatsForm;
