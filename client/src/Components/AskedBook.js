import React, { Component } from 'react';

class AskedBook extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="bg-white mb-3">
      <a href="/" data-toggle="collapse" data-target="#askedbook">
        <p className="child blue title pt-2 pl-2 mb-0">
          <span className="childIcon blue">f </span>Devolver un libro
        </p>
      </a>
      <div id="askedbook" className="collapse grey pl-2 pb-2">
        <p>Actualmente tienes el siguiente libro en préstamo:</p>
        <div className="d-flex justify-content-start mb-3">
          <img src="./media/dedo.jpg" alt="El dedo en la nariz" className="book col-5"/>
          <div className="pl-3">
            <p className="py-0 my-0">Fecha límite de devolución:</p>
            <p className="red">13 de Diciembre de 2020</p>
            <button className="btn btn-blue">QUIERO DEVOLVERLO</button>
            <p className="red mini">Llévalo al mostrador habilitado en el colegio el día 20 de Diciembre de 2020</p>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default AskedBook;