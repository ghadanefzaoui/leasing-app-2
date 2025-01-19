// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const CustomSidebar: React.FC = () => (
  <Sidebar>
    <Menu>
      <MenuItem component={<Link to="/dashboard" />}>Dashboard</MenuItem>
      <MenuItem component={<Link to="/profile" />}>Profile</MenuItem>
      <MenuItem component={<Link to="/settings" />}>Settings</MenuItem>
      <MenuItem component={<Link to="/logout" />}>Logout</MenuItem>
    </Menu>
  </Sidebar>
);

export default CustomSidebar;
