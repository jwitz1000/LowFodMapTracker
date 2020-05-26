import React, { useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Login = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const unInput = useRef();
  const pwInput = useRef();

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      {buttonLabel === "Register" ? (
        <Button className="bg-dark border-dark text-white" onClick={toggle}>
          {buttonLabel}
        </Button>
      ) : (
        <Button className="bg-dark border-dark text-white" onClick={toggle}>
          {buttonLabel}
        </Button>
      )}
      <Modal isOpen={modal} toggle={toggle} className={buttonLabel}>
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Userame:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                ref={unInput}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                ref={pwInput}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>{" "}
          <Button color="primary" className="btn-dark">
            Login{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
