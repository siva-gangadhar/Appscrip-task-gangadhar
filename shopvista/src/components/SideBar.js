import React, { useState } from 'react';
import './SideBar.css'; // Import your CSS file

const Sidebar = ({isOpen, toggleSidebar}) => {

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? 'Hide ' : 'Open '} Filter
      </button>
      <div className="sidebar-content">
        <h3>Filters</h3>
        <div className="filter-options">
          <h4>Ideal For</h4>
          <label><input type="checkbox" /> Men</label>
          <label><input type="checkbox" /> Women</label>
          <label><input type="checkbox" /> Baby & Kids</label>
          
          <h4>Occasion</h4>
          <label><input type="checkbox" /> All</label>

          <h4>Work</h4>
          <label><input type="checkbox" /> All</label>

          {/* Add more filters as needed */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;