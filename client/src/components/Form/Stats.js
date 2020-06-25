import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from "../../utils/API";
import moment from "moment";

const StatsForm = (props) => {
  // setting up state variables
  const [formState, formStateDispatch] = useState({
    createdDate: moment().format("YYYY-MM-DD") + "T00:00:00.000Z",
    exist: false,
  });
  const [showUpdateText, setShowUpdateText] = useState(false);

  // date
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
          exist: true,
        });
      }
    });
  }

  function submitForm(e) {
    e.preventDefault();

    if (!formState.exist === true) {
      let data = {
        createdDate: formState.createdDate,
        sleep: formState.stats.sleep,
        stress: formState.stats.stress,
        pain: formState.stats.pain,
        bowelMovements: formState.stats.bowelMovements,
        blood: formState.stats.blood,
        bloating: formState.stats.bloating,
        diahrrea: formState.stats.diahrrea,
        other: formState.stats.other,
      };
      API.createHealthSummary(data).then((res) => {
        if (res.data) {
          formStateDispatch({
            ...formState,
            stats: res.data,
            exist: true,
          });
        }
      });
    } else {
      let data = {
        sleep: formState.stats.sleep,
        stress: formState.stats.stress,
        pain: formState.stats.pain,
        bowelMovements: formState.stats.bowelMovements,
        blood: formState.stats.blood,
        bloating: formState.stats.bloating,
        diahrrea: formState.stats.diahrrea,
        other: formState.stats.other,
      };
      API.updateHealthSummary(formState.stats.id, data).then((res) => {
        formStateDispatch({
          ...formState,
          stats: res.data,
        });
        update();
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

  const handleCheckChange = (event) => {
    formStateDispatch({
      ...formState,
      stats: { ...formState.stats, [event.target.name]: event.target.checked },
    });
  };

  // notification

  const update = () => {
    // show the button
    setShowUpdateText(true);
    // remove the button after 1500ms
    setTimeout(() => {
      setShowUpdateText(false);
    }, 1500);
  };

  return (
    <div>
      <h1>Stats</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="sleep">Hours of Sleep</Label>
          <Input
            type="text"
            value={formState.stats ? formState.stats.sleep : ""}
            name="sleep"
            id="sleep"
            placeholder="6,7,8"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="stress">Stress Level</Label>
          <Input
            type="text"
            value={formState.stats ? formState.stats.stress : ""}
            name="stress"
            id="stress"
            placeholder="1-10"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pain">Pain Level</Label>
          <Input
            type="text"
            value={formState.stats ? formState.stats.pain : ""}
            name="pain"
            id="pain"
            placeholder="1-10"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bowelMovements">Number of Bowel Movements</Label>
          <Input
            type="text"
            value={formState.stats ? formState.stats.bowelMovements : ""}
            name="bowelMovements"
            id="bowelMovements"
            placeholder="1,2,3"
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>

        <h6>Select from the following:</h6>
        <FormGroup check>
          <Input
            type="checkbox"
            name="blood"
            id="blood"
            onChange={handleCheckChange}
            checked={formState.stats ? formState.stats.blood : false}
          />
          <Label for="blood" check>
            Blood
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            name="bloating"
            id="bloating"
            onChange={handleCheckChange}
            checked={formState.stats ? formState.stats.bloating : false}
          />
          <Label for="bloating" check>
            Bloating
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            name="diahrrea"
            id="diahrrea"
            onChange={handleCheckChange}
            checked={formState.stats ? formState.stats.diahrrea : false}
          />
          <Label for="diahrrea" check>
            Diahrrea
          </Label>
        </FormGroup>
        <br></br>

        <FormGroup>
          <Label for="other">Other Symptoms</Label>
          <Input
            type="textarea"
            value={formState.stats ? formState.stats.other : ""}
            name="other"
            id="other"
            placeholder="..."
            onChange={handleChange}
          />
        </FormGroup>
        <Button>{formState.exist === true ? "Update" : "Submit"}</Button>
        {showUpdateText && (
          <div className="updateMessage">Update Successful!</div>
        )}
      </Form>
    </div>
  );
};

export default StatsForm;
