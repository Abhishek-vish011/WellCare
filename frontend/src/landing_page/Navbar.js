import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setSidebarOpen(false);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
          <img style={{height:"4rem"}} src='/media/Images/logo2.png' alt='load' />
          </Link>
          </div>
        
        {!isMobile ? (
          <ul className="nav-links">
            <li><Link to="/searchdoctors">Find a Doctor</Link></li>
            <li><Link to="/investor">Investor</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        ) : (
          <button className="menu-btn" onClick={toggleSidebar}>
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
          <Link onClick={toggleSidebar} to="/searchdoctors">Find a Doctor</Link>
          <Link onClick={toggleSidebar} to="/investor">Investor</Link>
          <Link onClick={toggleSidebar} to="/about">About</Link>
          <Link onClick={toggleSidebar} to="/career">Career</Link>
          <Link onClick={toggleSidebar} to="/contact">Contact</Link>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
    </>
  );
};

export default Navbar;