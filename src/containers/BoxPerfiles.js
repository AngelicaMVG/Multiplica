import React , {Component} from 'react';
import MenuDesplegable from '../components/MenuDesplegable';

export default class Box extends Component {
  render(){
    return(
      <div>
        <ul>
          <li>
           <MenuDesplegable nombre='Cliente' className="active"/>
          </li>
          <li>
            <MenuDesplegable nombre='Producto'/>
          </li>
          <li>
          <MenuDesplegable nombre='Podio'/>
          </li>
          <li>
          <MenuDesplegable nombre='Gestión'/>
          </li>
          <br/>
          <li>
            <a href="!#" className="black-text links"> Contratacion |</a>
          </li>
          <li>
            <a href="!#" className="black-text links"> Ficha Cliente |</a>
          </li>
          <li>
            <a href="!#" className="black-text links-2"> Operar</a>
          </li>
        </ul>
      </div>
    )
  }
}
