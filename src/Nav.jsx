import React, { Component } from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      // <BrowserRouter>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand text-primary" href="#">
              Bidii yetu self help
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Gallery" activeClassName="active">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/Contact" activeClassName="active">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      // </BrowserRouter>
    );
  }
}

export default Nav;
