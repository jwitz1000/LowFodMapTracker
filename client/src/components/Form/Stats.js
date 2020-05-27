import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const StatsForm = (props) => {
  return (
    <div>
      <h1>Stats</h1>
      <Form>
        <FormGroup>
          <Label for="bowelMovements">Number of bowel movements</Label>
          <Input
            type="email"
            name="email"
            id="bowelMovements"
            placeholder="0,1,2.."
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Hours of sleep</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="7,8,..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Stress Level</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">General Notes</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Other Symptoms</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Cramping
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Bloating
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default StatsForm;
