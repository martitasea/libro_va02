import React, { Component } from 'react';

class Notification extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="pl-3">
        <p className="py-0 my-0">Fecha límite de devolución:</p>
        <p className="red">{this.props.dateIn}</p>
        <button className="btn btn-blue">QUIERO DEVOLVERLO</button>
        <p className="red mini">Llévalo al mostrador habilitado en el colegio el día 20 de Diciembre de 2020</p>
      </div>
    );
  }
}
export default Notification;