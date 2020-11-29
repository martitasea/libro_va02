import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../Context/AuthContext';

class AskedBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      books:[]
    };
  }




componentDidMount(){
  fetch("http://localhost:5000/getreadingbooks/"+this.context.firebaseID)
    .then((res) => {return res.json();})
    .then(booksJson => 
      {console.log(booksJson)
        this.setState({books:booksJson})
      }
      )
    .catch(err => {console.log(err);});
  }

  render() {
    if(this.context.login==="Iniciar Sesión"){
      return(
      <div className="bg-white mb-3">
        <a href="/" data-toggle="collapse" data-target="#askedbook">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Devolver un libro
          </p>
        </a>
        <div id="askedbook" className="collapse grey pl-2">
          <p className="grey pb-2">Tienes que iniciar sesión para poder devolver un libro.</p>
          <Link to="/">
            <input type="text" value="INICIAR SESIÓN" className="btn btn-green my-2 px-2"/>
          </Link>
        </div>
    </div>  
      )
    }
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

AskedBook.contextType=AuthContext;
export default AskedBook;