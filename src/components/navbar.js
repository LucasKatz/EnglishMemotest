import React, { useState } from 'react';
import "./componentes.css"

const Navbar = ({ onSelectLevel, counter }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='header'>
        <div>Counter: {counter}</div>
        <div className='center'>center</div>
        <div className='right'>
            <button onClick={toggleSidebar}>Level {sidebarOpen ? '▲' : '▼'}</button>
        </div>

        {sidebarOpen && (
          <div className='sidebar'>
            <button onClick={() => onSelectLevel(1)}>Level 1</button>
            <button onClick={() => onSelectLevel(2)}>Level 2</button>
            <button onClick={() => onSelectLevel(3)}>Level 3</button>
            <button onClick={toggleSidebar}>Close {sidebarOpen}</button>

          </div>
        )}
    </div>
  );
};

export default Navbar;
