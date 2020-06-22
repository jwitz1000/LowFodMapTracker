import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from "../../utils/API";
import moment from "moment";

const StatsForm = (props) => {
  const [formState, formStateDispatch] = useState({});
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
          stats: res.data[0],
        });
      }
    });
  }

  function submitForm(e) {
    e.preventDefault();
    let data = { stress: 8, createdDate: date + "T00:00:00.000Z" };
    if (!formState.stats) {
      API.createHealthSummary(data).then((res) => {
        console.log(res);
        if (res.data) {
          formStateDispatch({
            stats: res.data,
          });
        }
      });
    } else {
      let data = { stress: 7 };

      API.updateHealthSummary(formState.stats.id, data).then((res) => {
        console.log(res);

        formStateDispatch({
          stats: res.data,
        });
      });
    }
  }

  return (
    <div>
      <h1>Stats</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="stress">stress</Label>
          <Input
            type="text"
            value={formState.stats ? formState.stats.stress : null}
            name="password"
            id="stress"
            placeholder="1,2,3"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default StatsForm;
