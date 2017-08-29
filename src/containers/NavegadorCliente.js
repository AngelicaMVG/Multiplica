import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';
import '../css/NavCliente.css';

export default class NavCliente extends Component {
  render() {
    return (
      <Navbar className="blue-grey darken-1 margin">
        <NavItem className="active first-item">Estatus</NavItem>
        <NavItem className="item">Bítacora</NavItem>
        <NavItem className="item">Agenda</NavItem>
        <NavItem className="item">Imagen</NavItem>
        <NavItem className="item">Aclaraciones</NavItem>
        <NavItem className="item">Riesgos y alertas</NavItem>
      </Navbar>
    )
  }
}
