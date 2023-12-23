// Home.js
import React from "react";
import * as Bootstrap from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import * as Icon from "react-icons/fa"

import Tables from "./DBoardComponents/Tables"
import Favorites from "./DBoardComponents/Favorites";



const DashBoard = () => (
  <div id="DashBoard">
    <Bootstrap.Card className="p-1">
      <Bootstrap.CardBody>
        <div className="d-flex">
          <div className="mb-2 me-2">
            <div style={{ width: "16rem" }} className="border-bottom">
              <div className="my-4 me-2">
                <Bootstrap.Nav bg="inherit" className="bg-gradient text-decoration-none">
                  <Bootstrap.Container>
                    <Bootstrap.NavItem>
                      <NavLink className="nav-link text-body" to="/dashboard/tables">
                        <div className="d-flex justify-content-start">
                          <div>
                            <Icon.FaTable />
                          </div>
                          <div className="ms-3">Tables</div>
                        </div>
                      </NavLink>
                    </Bootstrap.NavItem>
                    <Bootstrap.NavItem>
                      <NavLink className="nav-link text-body" to="/dashboard/marked">
                        <div className="d-flex align-items-center justify-content-start">
                          <div>
                            <Icon.FaRegBookmark />
                          </div>
                          <div className="ms-3">Favorites</div>
                        </div>
                      </NavLink>
                    </Bootstrap.NavItem>
                  </Bootstrap.Container>
                </Bootstrap.Nav>
              </div>
            </div>
          </div>
          <div id="dashboardContent" className="m-auto">
            <Routes>
              <Route path="/tables" Component={Tables}/>
              <Route path="/marked" Component={Favorites}/>
            </Routes>
          </div>
        </div>

      </Bootstrap.CardBody>
    </Bootstrap.Card>

  </div>
);

export default DashBoard;
