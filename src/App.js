import React, { Component } from 'react';
import Nav from "./containers/Navbar"
import NavCliente from "./containers/NavegadorCliente";
import {Col, Row} from 'react-materialize';
import InfoPerfil from "./containers/InfoPerfil";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        {/* <NavCliente/> */}
        <Row>
          <Col s={4}>
            <InfoPerfil/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
