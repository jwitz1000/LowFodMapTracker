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
        <NavbarBrand href="/">Low FOD Map Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/team/">Team Page</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/dashboard">Dashboard</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/data">Data</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

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
