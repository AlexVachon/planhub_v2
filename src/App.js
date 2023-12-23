import React from "react";
import Header from "./components/Header";
import * as Bootstrap from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div  style={{ height: "100vh" }}>
      <Router>
        <div className="d-flex">
          <SideBar />
          <div className="d-flex flex-column flex-grow-1">
            <Header />
            <div className="flex-grow-1 p-3 m-auto" style={{ width: "100%", height: ""}}>
              <Bootstrap.Container>
                <Routes>
                  <Route path="/dashboard/*" Component={DashBoard} />
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
