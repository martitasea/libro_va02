import React, { Component } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import './MCatalogue.css';

class MCatalogue extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="mcatalogue container mt-3 sheet">
        <div className="row d-flex justify-content-center">
          <Thumbnail src="./media/dedo.jpg" alt="El dedo en la nariz" title="El dedo en la nariz"/>
          <Thumbnail src="./media/doctor.jpg" alt="La noche del Dr. Robot" title="La noche del Dr. Robot"/>
          <Thumbnail src="./media/arbol.jpg" alt="El arbol de las pesadillas" title="El arbol de las pesadillas"/>
          <Thumbnail src="./media/candido.jpg" alt="Cándido" title="Cándido"/>
          <Thumbnail src="./media/atascado.jpg" alt="Atascado" title="Atascado"/>
          <Thumbnail src="./media/cuerpo.jpg" alt="Y la odisea del cuerpo humano" title="Y la odisea del cuerpo humano"/>
          <Thumbnail src="./media/lechuga.jpg" alt="Carla y lechuga" title="Carla y lechuga"/>
          <Thumbnail src="./media/sistema.jpg" alt="El profesor astrocat y el Sistema Solar" title="El profesor astrocat"/>
          <Thumbnail src="./media/volcan.jpg" alt="El libro de la tristeza" title="El libro de la tristeza"/>
          <Thumbnail src="./media/arbol.jpg" alt="El arbol de las pesadillas" title="El arbol de las pesadillas"/>
          <Thumbnail src="./media/candido.jpg" alt="Cándido" title="Cándido"/>
          <Thumbnail src="./media/doctor.jpg" alt="La noche del Dr. Robot" title="La noche del Dr. Robot"/>
          <Thumbnail src="./media/atascado.jpg" alt="Atascado" title="Atascado"/>
        </div>
      </div>
    );
  }
}

export default MCatalogue;