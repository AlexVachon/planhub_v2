// Home.js
import React from "react";
import * as Bootstrap from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import * as Icon from "react-icons/fa"

import HomePage from "./DBoardComponents/HomePage"
import Boards from "./DBoardComponents/Boards"
import Favorites from "./DBoardComponents/Favorites";



const DashBoard = () => (
  <div id="DashBoard">
    <div className="p-1 me-2">
      <div>
        <div className="row">
          <div className="col-lg-3 mb-3">
            <div style={{ width: "16rem", borderRadius: "10px" }} className="py-1 shadow-sm">
              <div className="my-4 me-2">
                <Bootstrap.Nav bg="inherit" className="bg-gradient text-decoration-none">
                  <Bootstrap.Container>
                    <Bootstrap.NavItem>
                      <NavLink className="nav-link text-body" to="/dashboard/home">
                        <div className="d-flex justify-content-start align-items-center">
                            <Icon.FaInfoCircle />
                          <div className="ms-3">Info</div>
                        </div>
                      </NavLink>
                    </Bootstrap.NavItem>
                    <Bootstrap.NavItem>
                      <NavLink className="nav-link text-body" to="/dashboard/tables">
                        <div className="d-flex justify-content-start align-items-center">
                            <Icon.FaTable />
                          <div className="ms-3">Tables</div>
                        </div>
                      </NavLink>
                    </Bootstrap.NavItem>
                    <Bootstrap.NavItem>
                      <NavLink className="nav-link text-body" to="/dashboard/marked">
                        <div className="d-flex align-items-center justify-content-start align-items-center">
                            <Icon.FaRegBookmark />
                          <div className="ms-3">Favorites</div>
                        </div>
                      </NavLink>
                    </Bootstrap.NavItem>
                  </Bootstrap.Container>
                </Bootstrap.Nav>
              </div>
            </div>
          </div>
          <div id="dashboardContent" className="m-auto col-lg-9" >
            <Routes>
              <Route path="/home" Component={HomePage}/>
              <Route path="/tables" Component={Boards} />
              <Route path="/marked" Component={Favorites} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashBoard;
