import React from "react";
import Header from "./Header";
import * as Bootstrap from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Bootstrap.Container>
        <Bootstrap.Row>
          <Bootstrap.Col>
            <Bootstrap.Button variant="primary">Cliquez-moi</Bootstrap.Button>
          </Bootstrap.Col>
        </Bootstrap.Row>
      </Bootstrap.Container>
    </div>
  );
}

export default App;
