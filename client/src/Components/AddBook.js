import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {AuthConsumer} from '../Context/AuthContext';
import AuthContext from '../Context/AuthContext';
import {withRouter} from "react-router-dom";

class AddBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      isbn:"",
      firebaseID:"",
      message:"",
      info:[]
    };
    this.setAddIsbn=this.setAddIsbn.bind(this);
    this.getBookApi=this.getBookApi.bind(this);
  }

setAddIsbn(e){
  let addedIsbn=e.target.value.replace(/-/g,"")
  this.setState({isbn: addedIsbn})
}

getBookApi(contxt, e){
  let newBook={
    isbn:this.state.isbn,
    firebaseID: contxt.firebaseID,
  }

  fetch("http://localhost:5000/getbookapi/"+newBook.isbn+"/"+newBook.firebaseID, {
    method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newBook),
      // .catch(err => {console.log(err);});
    })

  .then(() => {
    fetch("http://localhost:5000/getbooktitle/"+newBook.isbn+"/"+newBook.firebaseID)
    .then((res) => {return res.json();})
    .then((titleJson) => {
      this.setState({info:titleJson[0].title})
      this.setState({message: "¡Muy bien! Has añadido el "})
      
    })
    .then(()=>{
      // setTimeout((e)=>(e.target.reset()))
      // setTimeout(()=>document.getElementById("addBookForm").reset)
      // document.getElementById("addBook").reset();
      setTimeout(() => this.props.history.push('/catalogue'), 1500)
    })
    .catch(err => {console.log(err);});
  })
}
  


render() {
  if(this.context.login==="Iniciar Sesión"){
  
    return (
      <div className="bg-white mb-5">
        <a href="/" data-toggle="collapse" data-target="#addbook">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Añadir un libro
          </p>
        </a>

        <div id="addbook" className="collapse grey px-2 pb-2">
          <p>Necesitas iniciar sesión para poder registrar un libro:</p>
          <Link to="/">
            <input type="text" value="INICIAR SESIÓN" className="btn btn-green my-2 px-2"/>
          </Link>
        </div>
      </div>  
    )}
    return (
      <AuthConsumer>
        {(contxt)=>(
          <div className="bg-white mb-5">
            <a href="/" data-toggle="collapse" data-target="#addbook">
              <p className="child blue title pt-2 pl-2 mb-0">
                <span className="childIcon blue">f </span>Añadir un libro
              </p>
            </a>
            <div id="addbook" className="collapse grey px-2 pb-2">
              <p>Busca en las primera páginas de tu libro el código ISBN e introdúcelo:</p>
              <form method="POST" action="/getbookapi" className="my-3"
                  onSubmit={(e)=>{
                  e.preventDefault();
                  this.getBookApi(contxt);
                  }}
              >
                <div>
                  <label className="mb-1 grey mini">ISBN</label>
                  <input id="addBookForm" onChange={this.setAddIsbn} type="text" name="isbn" className="p-1 mb-2 grey width100 border-blue-1"/>
                  <p className="green">{this.state.message}{this.state.info}</p>
                </div>
                <input type="submit" value="AÑADIR" className="btn btn-blue mt-2"></input>
              </form>
            </div>
          </div>
        )}
    </AuthConsumer>
    );
  }
}

AddBook.contextType=AuthContext;
export default withRouter(AddBook);