import React, { useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom"
import * as bootstrap from "bootstrap";

const Sidebar = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

    return () => {
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        if (tooltip) {
          tooltip.dispose();
        }
      });
    };
  }, []);

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar backgroundColor="black">
        <CDBSidebarHeader prefix={<i className="fa fa-bars"></i>}>
          <div className="d-flex align-items-center">
            <div>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                <img
                  src="/outline_account_circle_white_24dp.png"
                  alt="Hub Logo"
                  className="d-block"
                  style={{ marginRight: "8px" }}
                />
              </a>
            </div>
            <div className='d-flex flex-column'>
              <span style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>AlexandreVachon</span>
              <a
                href='/profile'
                className='hover-link'
              >
                @AlexVachon2000
              </a>
            </div>
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact="true" to="/dashboard" data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right" data-bs-container='body'>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact='true' to="/tables" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact="true" to="/profile" data-bs-toggle="tooltip" data-bs-title="Profile" data-bs-placement="right" data-bs-container='body'>
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact="true"
              to="/analytics"
              data-bs-toggle="tooltip" data-bs-title="Analytics" data-bs-placement="right" data-bs-container='body'
            >
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact="true"
              to="/documentation"
              target="_blank"
              data-bs-toggle="tooltip" data-bs-title="Documentation" data-bs-placement="right" data-bs-container='body'
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                Documentation
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter
          style={{ textAlign: "center" }}
          className="border-dark border-top"
        >
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            <img src="/outline_snowshoeing_white_24dp.png" alt="Image Footer" />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar >
    </div >
  );
};

export default Sidebar;

