import React from "react";
import Header from "./Header";
import * as Bootstrap from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./SideBar";

function App() {
  return (
    <div>
      <Router>
        <div className="d-flex" style={{ height: "100vh" }}>
          <SideBar />
          <div className="d-flex flex-column flex-grow-1">
            <Header />
            <div className="flex-grow-1 p-3">
              <Bootstrap.Container>
                <Bootstrap.Row>
                  <Bootstrap.Col>
                    <Bootstrap.Button variant="primary">Cliquez-moi</Bootstrap.Button>
                  </Bootstrap.Col>
                </Bootstrap.Row>
              </Bootstrap.Container>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
