import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import Notification from './Notification';

class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.getAskedBooks=this.getAskedBooks.bind(this);
  }

getAskedBooks(){
    // return this.state.books.map((book)=>(
      console.log("book")
      // <Notification src="./media/dedo.jpg" title="El dedo en la nariz" author="Paula Merlán Gómez"/>
  // ))
}

componentDidMount(){
  let firebaseID=this.context.firebaseID
  fetch("http://localhost:5000/allmybooks/"+firebaseID)
    .then((res) => {return res.json();})
    .then(booksJson => {this.setState({books:booksJson, isFetch:true})})
    .catch(err => {console.log(err);});
}

  render() {
    if(this.context.login==="Iniciar Sesión"){
      return(
      <div className="bg-white mb-3">
        <a href="/" data-toggle="collapse" data-target="#notifications">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Libros pendientes de préstamo
          </p>
        </a>
        <div id="notifications" className="collapse grey pl-2">
          <p className="grey pb-2">Tienes que iniciar sesión para poder ver los libros pendientes de préstamo.</p>
          <Link to="/">
            <input type="text" value="INICIAR SESIÓN" className="btn btn-green my-2 px-2"/>
          </Link>
        </div>
    </div>  
      )
    }
    return (
      <div className="bg-white mb-3">
      <a href="/" data-toggle="collapse" data-target="#notifications">
        <p className="child blue title pt-2 pl-2 mb-0">
          <span className="childIcon blue">f </span>Todos mis libros
        </p>
      </a>
      <div id="notifications" className="collapse grey pl-2">
        <p className="grey pl-2 pb-2">Te han pedido prestados los siguientes libros: (Confirma su prestamo):</p>
      <div className="d-flex flex-wrap justify-content-around">
        {this.getAskedBooks()}
      </div>
      </div>
    </div>  
    );
  }
}

Notifications.contextType=AuthContext;
export default Notifications;