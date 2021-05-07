// import logo from './logo.svg';
import React from "react";
import "./App.css";

import wobble from "./Wobble 4/Logo/Source/SVG/wobble llc-04.svg";
import wobble2 from "./Wobble 4/Logo/PNG/wobble llc-01.png";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src={wobble2} className="App-logo2" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Social Media</Nav.Link>
              <NavDropdown title="More Info" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Meet Shalini
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  About Wobble
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  How Wobble Works
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <header className="App-header">
          <img src={wobble} className="App-logo" alt="logo" />
          <h1>Welcome to Wobble</h1>
          <br></br>
          <h2>Content Coming Soon</h2>
          <p>In the meanwhile, you can find us on Instagram @Wobble.Life!</p>
          {/* <a
          className="App-link"
          href="."
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
      </div>
    );
  }
}

export default Home;
