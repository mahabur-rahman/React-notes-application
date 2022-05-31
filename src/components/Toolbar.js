import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Toolbar = ({ handleToggleDarkMode }) => {
  return (
    <div>
      <Navbar>
        <Container className="bg-light py-3 mb-5">
          <h2 className="display-6 fw-bold">Notes</h2>

          <Button
            className="border-0 toggle_btn"
            onClick={() => handleToggleDarkMode((prev) => !prev)}
          >
            Toggle Mode
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Toolbar;

// dark mode bg ===> black color
// note title ===> white color
