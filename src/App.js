import React from "react";
import Header from "./components/Header";
import * as Bootstrap from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <div className="d-flex">
          <SideBar />
          <div className="d-flex flex-column flex-grow-1">
            <div className="p-3">
              <Bootstrap.Container>
                <Routes>
                  <Route exact="true" path="/" element={<Navigate to="/dashboard" />} />
                  <Route exact="true" path="/dashboard/*" Component={DashBoard} />
                  <Route exact="true" path="/dashboard" element={<Navigate to="/dashboard/info" />} />
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
