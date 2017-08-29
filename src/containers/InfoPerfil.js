import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import User from '../icono-de-usuario.jpg';
import '../css/InfoUsuario.css';


export default class Info extends Component {
  render(){
    return(
      <div className='informacion'>
        <Row>
          <Col s={6}>
            <img src={User} alt="foto-usuario" className="img-perfil"/>
          </Col>
          <Col s={6}>
            <h6>Juan G. Treviño</h6>
            <p className="grey-text">CPC 25%</p>
            <div className="activo"></div>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <label htmlFor="">RFC</label>
            <p>MAMK908976-YFG</p>
            <label htmlFor="">Edad</label>
            <p>36 años</p>
            <label htmlFor="">Sector</label>
            <p>Personas Físicas</p>
            <label htmlFor="">Ejecutivo</label>
            <p>Gloria Soledad</p>
            <label htmlFor="">No.DE CLIENTE</label>
            <p>1562456</p>
          </Col>
        </Row>
        <Row className="info-contacto">
          <Col s={12}>
            <div className='contacto-item'>
              <i className='material-icons grey-text'> drafts</i>
              <span className="blue-text">mthurn@live.com</span>
            </div>
            <div className='contacto-item'>
              <i className='material-icons grey-text'> call</i>
              <span> +52 55 33 76 98 90</span>
            </div>
            <div className='contacto-item'>
              <i className='material-icons grey-text'> email</i>
              <span className='grey-text'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
            </div>
            <div className='contacto-item'>
              <a className="right" href="">Ver más canales <i className="material-icons icon-next">keyboard_arrow_right</i></a>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
