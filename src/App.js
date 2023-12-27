import React from "react";
import Header from "./components/Header";
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
            <header className="bg-body-tertiary shadow-sm p-3 text-center w-100" >
              <Bootstrap.Nav  style={{ position: "relative", left: "95%" }} >
                <Bootstrap.NavItem id="logout-btn">
                  <Bootstrap.NavLink className="text-body btn btn-outline-secondary shadow-sm">
                      <Icon.FaSignOutAlt />
                  </Bootstrap.NavLink>
                </Bootstrap.NavItem>
              </Bootstrap.Nav>

            </header>
            <div className="mx-auto" style={{ overflowY: "auto", overflowX: "hidden", maxHeight: "80vh", marginTop: "5rem" }}>
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
