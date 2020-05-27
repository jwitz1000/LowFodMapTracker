import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";

const TheNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: `#e6ffe1` }} light expand="md">
        <NavbarBrand href="/">Low Fod Map Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink href="/team/">Team Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/privacy">Privacy Policy</NavLink>
            </NavItem>
            <NavItem>
              <Login buttonLabel="Login" />
            </NavItem>
            <NavItem>
              <SignUp buttonLabel="SignUp" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TheNav;
