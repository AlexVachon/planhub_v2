import React from "react";
import * as Bootstrap from "react-bootstrap";


const Header = () => {
  return (
    <header>
      <Bootstrap.Navbar
        bg="body-secondary"
        className="bg-gradient"
        variant="secondary gradient"
      >
        <Bootstrap.Container>
          <Bootstrap.Navbar.Brand href="#home" className="fs-4">PlanHub</Bootstrap.Navbar.Brand>
        </Bootstrap.Container>
      </Bootstrap.Navbar>
    </header>
  );
};

export default Header;
