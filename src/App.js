import React from "react";
import Header from "./components/Header";
import * as Bootstrap from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./components/Home";

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
                <Routes>
                  <Route path="/" Component={Home} />
                  {/* <Route exact='true' path="/profile" Component={}/>
                <Route exact='true' path="/analytics" Component={}/>
                <Route exact='true' path="/documentation" Component={}/> */}
                </Routes>
              </Bootstrap.Container>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
