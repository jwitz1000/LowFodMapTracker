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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/dashboard">Dashboard</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/dashboard">Data</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Meal Planner</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/team/">Team Page</NavLink>
            </NavItem>
            <NavItem>
              <Login buttonLabel="Login" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TheNav;
