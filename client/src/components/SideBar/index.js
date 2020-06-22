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

const SideBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav class="main-menu">
      <ul>
        <li>
          <a href="/team">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">Dashboard</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text">Stars Components</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
