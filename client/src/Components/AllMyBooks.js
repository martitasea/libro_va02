import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import Book from './Book';


class AllMyBooks extends Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
      isFetch:false,
      message:""
    };
    this.getAllMyBooks=this.getAllMyBooks.bind(this);
  }

getAllMyBooks(){
    return this.state.books.map((book)=>(
    <Book
      key={book.bookID}
      src={book.image}
      title={book.title}
      classIcon="prevapceptIconDelete far fa-trash-alt"
      onClick={()=>{
        fetch(`http://localhost:5000/deletebook/${book.boodID}`, {
          method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(book),
          })
          .then(()=>{
            this.setState({message:"Has borrado el libro con éxito."})  
          })
          .then(()=>{
            fetch(`http://localhost:5000/allmybooks/${this.context.firebaseID}`)
            .then((res) => {return res.json();})
            .then(booksJson => {this.setState({books:booksJson, isFetch:true})})
            .catch(err => {console.log(err);});
          })
          }}      
      />
  ))
}

// In order to reload if book is deleted (books change)
componentWillUpdate(prevProps, prevState){
  if(prevState.books!==this.state.books){
  this.getAllMyBooks()
}
}

componentDidMount(){
  fetch(`http://localhost:5000/allmybooks/${this.context.firebaseID}`)
    .then((res) => {return res.json();})
    .then(booksJson => {this.setState({books:booksJson, isFetch:true})})
    .catch(err => {console.log(err);});
}

  render() {
    if(this.context.login==="Iniciar Sesión"){
      return(
      <div className="shadow bg-white mb-3">
        <a href="/" data-toggle="collapse" data-target="#allmybooksloggedout">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>MI BIBLIOTECA
          </p>
        </a>
        <div id="allmybooksloggedout" className="collapse grey pl-2">
          <p className="grey pb-2">Tienes que iniciar sesión para poder ver tus libros.</p>
          <Link to="/login">
            <button type="text" className="btn btn-green my-2 px-2">INICIAR SESIÓN</button>
          </Link>
        </div>
    </div>  
      )
    }
    return (
      <div className="shadow bg-white mb-3">
        <a href="/" data-toggle="collapse" data-target="#allmybooksloggedin">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>MI BIBLIOTECA
          </p>
        </a>
        <div id="allmybooksloggedin" className="collapse grey pl-2">
          <p className="grey pl-2 pb-2">Estos son los libros de tu biblioteca:</p>
        <p className="ml-2 mb-2 redbg white mediumbold">{this.state.message}</p>
        <div className="d-flex flex-wrap justify-content-around">
            {this.getAllMyBooks()}
        </div>
        </div>
      </div>  
    );
  }
}

AllMyBooks.contextType=AuthContext;
export default AllMyBooks;