import React, { Component } from 'react';
import './MBookdetail.css';

class MBookdetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  render() {
    return (
      <section className="container bg-white m-3 bookdetail">

        <div className="row">
          <img src="./media/dedo.jpg" alt="El dedo en la nariz" className="book my-3 ml-3 col-5"/>
          <div className="mt-3 mx-1 col-6">
            <p className="uppercase dosis py-0 my-0">El dedo en la nariz</p>
            <p>Paula Gómez Merlán</p>
            <p className="dosis uppercase py-0 my-0">Editorial</p>
            <p>Suma Internacional</p>
            <p className="dosis uppercase py-0 my-0">Idioma</p>
            <p>Español</p>
          </div>
          <div className="mx-3">
            <p>¡A Sofía le ha crecido la nariz! Ya se lo habían dicho sus padres. Y es que esta niña no para de meterse el dedo en la nariz. Tanto, que su dedo se ha hecho una verdadera casa allí dentro: un salón, una cocina con menú degustación...
            </p>
            <p className="dosis uppercase py-0 my-0">Fecha de publicación</p>
            <p>2017</p>
            <p className="dosis uppercase py-0 my-0">ISBN</p>
            <p>978-84-9847-066-6</p>
          </div>
          <button className="btn btn-green uppercase m-3">Pedir prestado</button>
        </div>
      </section>
    );
  }
}

export default MBookdetail;