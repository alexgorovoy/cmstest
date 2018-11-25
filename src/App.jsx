import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";

import logo from './static/svg/logo.svg';
import './App.css';

class App extends Component {
  render() {
    const activeRoute = window.location.pathname || '/';
    return (
      <Router>
        <div className="app">
        
          <Navbar bg="dark" variant="dark">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  alt="logo"
                  src={logo}              
                  className="app-logo d-inline-block"
                />
              </Navbar.Brand>
            </LinkContainer>
            <Nav activeKey={activeRoute} defaultActiveKey="/" onSelect={(eventKey) => console.log('Selected:', eventKey)}>
              <Nav.Item>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/faqs">
                  <Nav.Link>FAQs</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Navbar>
          
          <div className="app-main">
            <Route exact path="/" component={Home} />
            <Route path="/faqs" component={Faq} />
          </div>

        </div>
      </Router>        
    );
  }
}

export default App;
