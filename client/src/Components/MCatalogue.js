import React, { Component, Fragment } from 'react';
import Thumbnail from './Thumbnail';
import {Link} from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import Back from '../Components/Back';

class MCatalogue extends Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
      firebaseID:"",
      ownerID:""
    };
    this.getAllCatalogue=this.getAllCatalogue.bind(this);
  }

getAllCatalogue(){
  return this.state.books.map((book)=>(
  <Thumbnail
    key={book.isbn}
    src={book.image}
    title={book.title}
    phase={book.phase}
    isbn={book.isbn}
  />
  ))
}

componentDidMount(){
  fetch(`http://localhost:5000/allcatalogue/${this.context.firebaseID}`)
    .then((res) => {return res.json();})
    .then(booksJson => {
      this.setState({books:booksJson, firebaseID:this.context.firebaseID})
    })
    .then(this.getAllCatalogue())
    .catch(err => {console.log(err);});
}

  render() {
    if(this.context.login==="Iniciar Sesión"){
      return (
        <div className="mcatalogue container mt-5 sheet mb-5">
          <div className="row d-flex justify-content-center">
            <img src="./media/ReadingSideDoodle03-2.svg" alt="" className="mt-3 doodle"/>
            <Link to="/login">
              <button type="text" className="btn btn-green my-2 px-2">INICIAR SESIÓN</button>

            </Link>
            <p className="mt-4 child title blue text-center">Lo siento para ver el catálogo tienes que iniciar sesión</p>
          </div>
        </div>
      )}
      return (
        <Fragment>
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row">
              <p className="margin-catalogue child blue title pt-2 pl-2">
              <span className="childIcon blue">f </span>CaTáLoGo
              </p>
            </div>
            <Back/>
          </div>
        <div>
          <div className="row d-flex justify-content-center">
            {this.getAllCatalogue()}
          </div>
        </div>
        </Fragment>
      );
    }
  }
MCatalogue.contextType=AuthContext;
export default MCatalogue;