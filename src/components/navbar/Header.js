import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
export default function Header() {
  return (
    <Navbar expand="lg" className="header-main">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="nav-link" href="https://usaid.me">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand className="blog-name" href="#home">
        Usaid's Blog
      </Navbar.Brand>
    </Navbar>
  );
}
