import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import Book from './Book';

class AskedBooks extends Component {
  constructor(props){
    super(props);
    this.state = {
      askedBooks:[], 
      loanedBooks:[], 
      pendingBooks:[], 
      message1:"",
      message2:"",
      message3:"",
      info:""
    };
    this.getAskedBooks=this.getAskedBooks.bind(this);
    this.getLoanedBooks=this.getLoanedBooks.bind(this);
    this.getPendingBooks=this.getPendingBooks.bind(this);
    this.getNoNotification=this.getNoNotification.bind(this)
  }

getAskedBooks(){
  if(this.state.askedBooks.length!==0){
    return this.state.askedBooks.map((book)=>(
      <>
      <p className="black pl-2"><span className="childIcon medium black pt-3">O </span>Te han pedido prestados los siguientes libros:</p>
          <p className="ml-3">Confirma haciendo click en <i className="prevapceptIconOK fas fa-check-square"></i></p>
          <p className="greenbg white px-2 mb-2">{this.state.message1}{this.state.info}</p>
          <p className="redbg white px-2 mb-2"><span>{this.state.message3}</span>{this.state.message2}</p>
      <Book
      key={book.isbn}
      src={book.image}
      title={book.title}
      classIcon="prevapceptIconOK fas fa-check-square"
      onClick={()=>{
        fetch(`http://localhost:5000/updatebookphase/${book.bookID}/2/dateLoan`)
        .then(()=>{
          fetch(`http://localhost:5000/getbooktitle/${book.bookID}`)
          .then((res)=>{return res.json();})
          .then((titleJson)=>{
            this.setState({info:titleJson[0].title, message1: "Se ha confirmado el préstamo del libro: ", message2: " Entrégalo el próximo día de cole en el AMPA", message3:<i className="fas fa-exclamation-triangle"></i>})
          })
        })
        .then(()=>{
          fetch(`http://localhost:5000/getbooks/${this.context.firebaseID}/2`)
          .then((res) => {return res.json();})
          .then(booksJson => {this.setState({askedBooks:booksJson})})
          .catch(err => {console.log(err);});
        })
        .catch(err => {console.log(err);});
      }
    }/>
    </>
  ))
  }
  }


getLoanedBooks(){
  if(this.state.loanedBooks.lenght!==0){
return this.state.loanedBooks.map((book)=>(
    <>
    <p className="black pl-2"><span className="childIcon medium black pt-3">O </span>Tienes prestados ya:</p>
    <Book
    key={book.isbn}
    src={book.image}
    title={book.title}/>
    </>
))
}
}

getPendingBooks(){
  if(this.state.pendingBooks.length!==0){
    return this.state.pendingBooks.map((book)=>(
      <div>
      <p className="black pl-2"><span className="childIcon medium black pt-3">O </span>Te quieren devolver:</p>
            <p className="ml-3">Confirma haciendo click en <i className="prevapceptIconOK fas fa-check-square"></i></p>
      <Book
      key={book.isbn}
      src={book.image}
      title={book.title}
      classIcon="prevapceptIconOK fas fa-check-square"
      onClick={()=>{
        fetch(`http://localhost:5000/updatebookphase/${book.bookID}/5/datePending`)
        .then(()=>{
          fetch(`http://localhost:5000/getbooktitle/${book.bookID}`)
          .then((res)=>{return res.json();})
          .then((titleJson)=>{
            this.setState({info:titleJson[0].title, message1: "Se ha confirmado la devolución del libro: ", message2: " Ve a recogerlo el próximo día de cole en el AMPA", message3:<i className="fas fa-exclamation-triangle"></i>})
          })
        })
        .then(()=>{
          fetch(`http://localhost:5000/getbooks/${this.context.firebaseID}/5`)
          .then((res) => {return res.json();})
          .then(booksJson => {this.setState({askedBooks:booksJson})})
          .catch(err => {console.log(err);});
        })
        .catch(err => {console.log(err);});
      }}
      />
      </div>
  ))
  }
}


getNoNotification(){
  if(this.state.askedBooks.length===0&&this.state.loanedBooks.length===0&&this.state.pendingBooks.length===0){
    return(
      <p className="black pl-2 pb-2"><span className="childIcon medium black pt-3">O </span>No tienes préstamos pendientes.</p>
    )
  }
}

// In order to reload if book is loaned (books change)
// componentWillUpdate(prevProps, prevState){
componentDidUpdate(prevProps, prevState){
  if(prevState.askedBooks!==this.state.askedBooks||
    prevState.loanedBooks!==this.state.loanedBooks||
    prevState.pendingBooks!==this.state.pendingBooks){
  this.getAskedBooks()
  this.getLoanedBooks()
  this.getPendingBooks()
}
}

componentDidMount(){
  fetch(`http://localhost:5000/getbooks/${this.context.firebaseID}/2`)
    .then((res) => {return res.json();})
    .then(booksAsked => {
      this.setState({askedBooks:booksAsked})
      if(booksAsked!==[]){
        this.context.setNotification(<i class="fas fa-bell questionIcon"></i>)
      }
    })
    .then(
      ()=>fetch(`http://localhost:5000/getbooks/${this.context.firebaseID}/4`)
      .then((res) => {return res.json();})
      .then(booksLoaned => {this.setState({loanedBooks:booksLoaned})})
      .then(()=>fetch(`http://localhost:5000/getbooks/${this.context.firebaseID}/5`)
        .then((res) => {return res.json();})
        .then(booksPending => {this.setState({pendingBooks:booksPending})})))
    .then(()=>{
      if(this.state.askedBooks.length===0&&this.state.pendingBooks.length===0)
      {this.context.setNotification("")}
      else{this.context.setNotification(<i class="fas fa-bell questionIcon"></i>)}
    })
    .catch(err => {console.log(err);})
}

  render() {
    if(this.context.login==="Iniciar Sesión"){
      return(
      <div className="shadow bg-white mb-3">
        <a href="/" data-toggle="collapse" data-target="#notificationsloggedout">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Préstamos
          </p>
        </a>
        <div id="notificationsloggedout" className="collapse grey pl-2">
          <p className="grey pb-2">Tienes que iniciar sesión para poder ver los libros pendientes de préstamo.</p>
          <Link to="/login">
            <button type="text" className="btn btn-green my-2 px-2">INICIAR SESIÓN</button>
          </Link>
        </div>
    </div>  
      )
    }
    return (
    <div className="width100 shadow bg-white mb-3">
        <a href="/" data-toggle="collapse" data-target="#notificationsloggedin">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Préstamos
          </p>
        </a>
        <div id="notificationsloggedin" className="collapse grey pl-2">
          {this.getAskedBooks()}
          {this.getLoanedBooks()}
          {this.getPendingBooks()}
          {this.getNoNotification()}
        </div>
    </div>  
    );
  }
}

AskedBooks.contextType=AuthContext;
export default AskedBooks;