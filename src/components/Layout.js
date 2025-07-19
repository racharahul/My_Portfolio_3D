import React from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Extract the current page name from the location
  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    return path.substring(1).charAt(0).toUpperCase() + path.substring(2);
  };

  return (
    <div className="layout">
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;