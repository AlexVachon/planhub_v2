import React from "react";
import SideBar from "./SideBar";
import * as Bootstrap from "react-bootstrap";

const Header = () => {
  return (
    <header className="mb-3">
      <Bootstrap.Navbar
        bg="body-secondary"
        className="bg-gradient"
        variant="secondary gradient"
      >
        <Bootstrap.Container>
          <Bootstrap.Button>

          </Bootstrap.Button>
          <Bootstrap.Navbar.Brand href="#home" className="font-monospace">PlanHub</Bootstrap.Navbar.Brand>
        </Bootstrap.Container>
      </Bootstrap.Navbar>
    </header>
  );
};

export default Header;
