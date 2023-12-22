import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar className='bg-black'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars"></i>}>
          <div className='d-flex align-items-center'>
            <div>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                <img src='/outline_account_circle_white_24dp.png' alt='Hub Logo' className='d-block' style={{ marginRight: '8px' }} />
              </a>
            </div>
            <div className='d-flex flex-column'>
              <span style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>AlexandreVachon</span>
              <a href='/profile' onMouseEnter={(e) => (e.target.style.color = '#A9A9A9', e.target.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.target.style.color = '#808080', e.target.style.textDecoration = 'none')} style={{ color: '#808080',fontSize: '8px', textDecoration: 'none' }}>
                @AlexVachon2000
              </a>
            </div>
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact='true' to="/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact='true' to="/tables" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact='true' to="/profile" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact='true' to="/analytics" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact='true' to="/documentation" target="_blank" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Documentation</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }} className='border-dark border-top'>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            <img src='/outline_snowshoeing_white_24dp.png' alt='Image Footer' />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;