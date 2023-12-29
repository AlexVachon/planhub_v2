import React from "react";

import * as Bootstrap from "react-bootstrap";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";

import * as Icon from "react-icons/fa"

function App() {

  return (
    <div style={{ height: "100vh" }} className="p-0 m-0">
      <Router>
        <div className="d-flex">
          <SideBar />
          <div className="d-flex flex-column flex-grow-1">
            <header className="bg-body-tertiary bg-gradient shadow-sm p-1 text-center" >
              <button className="btn btn-outline-dark shadow-sm me-3 bg-gradient" style={{ float: "right" }} id="logout-btn">
                <Icon.FaSignOutAlt />
                <span className="p-1">
                  Log Out
                </span>
              </button>

            </header>
            <div className="mx-auto w-100" style={{ overflowY: "auto", overflowX: "hidden", maxHeight: "80vh", marginTop: "5rem" }}>
              <Bootstrap.Container>
                <Routes>
                  <Route exact="true" path="/" element={<Navigate to="/dashboard" />} />
                  <Route exact="true" path="/dashboard/*" Component={DashBoard} />
                  <Route exact="true" path="/dashboard" element={<Navigate to="/dashboard/home" />} />
                  <Route exact="true" path="*" element={<Navigate to="/dashboard" />} /> {/* IF route not found redirects to /dashboard/ */}
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
