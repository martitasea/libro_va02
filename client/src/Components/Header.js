import React, { Component } from 'react';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import AuthContext from '../Context/AuthContext';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    if(this.context.rol!=="admin"){
      return (
        <div className="d-flex justify-content-between align-items-center">
          <NavBar  
          name={this.context.name} 
          text1="Catálogo" link1="/"
          text2="Área de usuario" link2="/userarea"
          text3="Sobre LibroVa" link3="/instructions"
          log={this.context.login} 
          />
            <Link to="/">
              <img src="./media/logo.svg" alt="Logo Libro va" className="logo"/>
            </Link>
            <Link to="/instructions">
              <i className="fas fa-exclamation-circle questionIcon"></i>
            </Link>
        </div>
    );
  }
  return (
    <div className="d-flex justify-content-between align-items-center">
      <NavBar  
      name={this.context.name} 
      text1="Devoluciones-Préstamos" link1="/admin"
      text2="Usuarios" link2="/users"
      text3="Indicadores" link3="/charts"
      log={this.context.login} 
      />
        <Link to="/">
          <img src="./media/logo.svg" alt="Logo Libro va" className="logo"/>
        </Link>
        <Link to="/instructions">
          <i className="fas fa-exclamation-circle questionIcon"></i>
        </Link>
    </div>
);
}
}
Header.contextType=AuthContext;
export default Header;