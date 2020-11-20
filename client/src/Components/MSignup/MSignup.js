import React, { Component } from 'react';
import './MSignup.css';

class MSignup extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="overlay-cyan">
      <section className="bg-white d-flex flex-column mt-3 signup">
        <p className="child green title text-center  mt-3 mb-0">Registrarse</p>
        <form className="mx-3 mb-3">
          <div>
            <p className="mb-1 grey mini">NOMBRE</p>
            <input type="text" className="p-1 grey width100 border-blue-1"/>
          </div>
          <div>
            <p className="mb-1 mt-3 grey mini">CORREO ELECTRÓNICO</p>
            <input type="mail" className="p-1 grey width100 border-blue-1"/>
          </div>
          <div>
            <p className="mb-1 mt-3 grey mini">CONTRASEÑA</p>
            <input type="password" className="p-1 grey width100 border-blue-1"/>
          </div>
          <div>
            <p className="mb-1 mt-3 grey mini">NOMBRE PADRE/MADRE/TUTOR</p>
            <input type="text" className="p-1 grey width100 border-blue-1"/>
          </div>
          <div>
            <p className="mb-1 mt-3 grey mini">TELÉFONO PADRE/MADRE/TUTOR</p>
            <input type="phone" className="p-1 grey width100 border-blue-1"/>
          </div>
          <div className="d-flex justify-content-around mt-4 mb-2">
            <input type="submit" value="RESGISTRARSE" className="btn btn-green"/>
          </div>
        </form>
      </section>
      </div>
    );
  }
}

export default MSignup;