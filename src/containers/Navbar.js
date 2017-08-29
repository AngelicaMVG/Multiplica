import React, {Component} from "react";
import {NavItem, Button, Icon, Dropdown} from "react-materialize";
import Box from './BoxPerfiles';
import '../App.css';
import Logo from '../logoBBVA.png';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav-extended white ">
          <div className="col s12">
            <a href="#" className="brand-logo black-text"><img src={Logo} alt=""/></a>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className=" hide-on-med-and-down">
              <li className=" margin-left">
                <Dropdown trigger={< a className="white black-text" > Mis Accesos < Icon className="right" > arrow_drop_down < /Icon></a >}>
                  <NavItem>
                    one
                  </NavItem>
                  <NavItem>
                    two
                  </NavItem>
                  <NavItem>
                    three
                  </NavItem>
                </Dropdown>
              </li>
              <li className="mini-menu">
                <Box/>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-blue">
              <li className="tab grey darken-3">
                <a href="#test1"></a>
              </li>
              <li className="tab grey darken-3">
                <a  href="#test2"></a>
              </li>
              <li className="tab grey">
                <a  className="active" href="#test3"></a>
              </li>
              <li className="tab grey darken-3">
                <a href="#test4"></a>
              </li>
            </ul>
          </div>
          <div className="grey space"></div>
          <div className=" grey darken-1 space"></div>
        </nav>
      </div>
    )
  }
}
