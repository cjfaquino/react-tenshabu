import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyJumbo from './components/MyJumbo';
import MyFooter from './components/MyFooter';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import modules from './modules';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <MyJumbo />
        </header>
        <MyNavbar />
        <div className="App-content">
          <Route exact path="/" component={MyFooter} />
          {modules.map((module) => (
            <Route {...module.routeProps} key={module.name} />
          ))}
        </div>
        {/* <MyFooter /> */}
      </div>
    </Router>
  );
}

export default App;
