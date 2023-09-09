import { NavLink as ReactLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import logo from "./Logo.png";
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
} from 'reactstrap';

function Customnavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark"
      dark
      expand="md"
      fixed=""
      >
        <NavbarBrand tag={ReactLink} to ="/Home"><img className="" src={logo} alt='' width={100}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/Login" >Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Signup">
                Signup
              </NavLink></NavItem>
              <NavItem>
              <NavLink tag={ReactLink} to="/About">
                About
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={ReactLink} to="/ProductivityChallenge" >Productivity Challenge</NavLink>
            </NavItem>
           
              <NavItem>
              <NavLink tag={ReactLink} to="/GoalSettingApp" >Goal Settings</NavLink>
            </NavItem>
           
              <NavItem>
              <NavLink tag={ReactLink} to="/MainContent" >Productivity Book review</NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="Our services">Our services</DropdownItem>
                <DropdownItem>Youtube</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Customnavbar; 