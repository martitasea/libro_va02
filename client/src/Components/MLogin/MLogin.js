import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './MLogin.css';

class MLogin extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div className="overlay-cyan">
      <section className="bg-white d-flex flex-column login">
        <p className="child green title text-center mt-3">Iniciar sesión</p>
        <form className="mx-3 mb-3">
          <div>
            <p className="mb-1 grey mini">CORREO ELECTRÓNICO</p>
            <input type="mail" className="p-1 grey width100 border-blue-1"/>
          </div>
          <div>
            <p className="mb-1 mt-3 grey mini">CONTRASEÑA</p>
            <input type="passsword" className="p-1 grey width100 border-blue-1"/>
          </div>
          <div className="d-flex justify-content-around mt-5 mb-2">
            <input type="submit" value="ENTRAR" className="btn btn-green px-2"/>
            <Link to="/signup">  
              <button className="btn btn-green-ghost">REGISTRARSE</button>
            </Link>
          </div>
        </form>
      </section>
      </div>
    );
  }
}          

export default MLogin;