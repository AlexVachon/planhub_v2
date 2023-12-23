import React from "react";
import * as Bootstrap from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

const Home = () => (
  <div className="m-auto">
    <Bootstrap.Container>
      <h1>Accueil</h1>
      <Bootstrap.Container>
        <div className="d-flex justify-content-between">
          <div className="m-2">
            <Bootstrap.Card>
              <Bootstrap.CardBody>
                <CDBSidebar backgroundColor="inherit" textColor="black">
                  <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                      <NavLink exact="true" to="/tables">
                        <CDBSidebarMenuItem icon="table">
                          Tables
                        </CDBSidebarMenuItem>
                      </NavLink>
                    </CDBSidebarMenu>
                  </CDBSidebarContent>
                </CDBSidebar>
              </Bootstrap.CardBody>
            </Bootstrap.Card>
          </div>
          <div className="m-auto mx-2 flex-grow-1 text-center">allo</div>
        </div>
      </Bootstrap.Container>
    </Bootstrap.Container>
  </div>
);

export default Home;
