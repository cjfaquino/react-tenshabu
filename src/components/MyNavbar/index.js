import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import modules from '../../modules';

function MyNavbar(props) {
  const [currentTab, setCurrentTab] = useState('Home');
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar bg="dark" variant="dark" expand="xl" sticky="top" expanded={expanded}>
      <div className="container">
        <Navbar.Brand>
          <Link to="/">天 Ten Shabu</Link>
        </Navbar.Brand>
        <a href='https://order.online/store/ten-shabu-906166'
          className='nav-link orderOnline ml-auto'
          >
          Order Online
          </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ul className="App-nav navbar-nav ml-auto mt-2 mt-lg-0 text-right">
              <li className="nav-item">
                <Link
                  className={currentTab === 'Home' ? 'active nav-link' : 'nav-link'}
                  to="/"
                  onClick={() => {
                    setCurrentTab('Home');
                    setExpanded(false);
                  }}
                >
                  Home
                </Link>
              </li>
              {modules.map((module) => (
                <li key={module.name} className={currentTab === module.name ? 'active nav-link' : 'nav-link'}>
                  <Link
                    className="nav-item"
                    to={module.routeProps.path}
                    onClick={() => {
                      setCurrentTab(module.name);
                      setExpanded(false);
                    }}
                  >
                    {module.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
        
      </div>
    </Navbar>
  );
}

export default MyNavbar;
