import React from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-primary navbar-expand">
      <Container>
        <NavbarBrand>CAPTURE</NavbarBrand>
        <Nav>
          <Nav.Item>
            <Link to="/customers" className="nav-link">
              CUSTOMERS
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addcustomer" className="nav-link">
              ADD
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/singup" className="nav-link">
              SINGUP
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
