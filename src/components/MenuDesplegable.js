import React, {Component} from "react";
import {Dropdown, NavItem, Icon} from "react-materialize";
import "../App.css";

export default class MenuDesplegable extends Component {
  render(){
    return (
      <Dropdown trigger={< a className="white black-text btn-menu" > {this.props.nombre} < Icon className="right " > arrow_drop_down < /Icon></a >}>
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
    )
  }
}
