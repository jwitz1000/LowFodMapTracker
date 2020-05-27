import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const StatsForm = (props) => {
  function submitForm(e) {
    e.preventDefault();
    console.log("got it");
  }

  return (
    <div>
      <h1>Stats</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="stress">Stress Level</Label>
          <Input type="select" name="stress" id="stress">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="bowelMovement">Number of Bowel Movements</Label>
          <Input type="select" name="bowelMovement" id="bowelMovement">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default StatsForm;
