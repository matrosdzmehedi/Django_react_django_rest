import React, { Fragment, Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Project from "./Project";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";
import Home from "./Home";

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand">LOGO</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
             
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}
