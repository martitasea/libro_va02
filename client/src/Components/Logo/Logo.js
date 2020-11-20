import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <article className="col-3 order-md-0 my-2 p-0">
            <img src="./media/logo.svg" alt="Logo Libro va" className="logo mt-2"/>
          </article>
          <article className="col-2 offset-7 offset-md-0 order-md-2 p-0 d-flex justify-content-end">
            <img src="./media/boy.svg" alt="Área de usuario" className="userIcon mt-4 mx-1"/>
            <img src="./media/question.svg" alt="Información adicional" className="questionIcon m-2 mt-4"/>
          </article>
      </div>
    );
  }
}

export default Logo;