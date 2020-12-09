import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import AuthContext from '../Context/AuthContext';

class MBookdetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookID:"-",
      title:"-",
      authors:"-",
      publisher:"-",
      publishedDate:"-",
      description:"-",
      categories:"-",
      language:"-",
      image:"-",
      textSnippet:"-",
      isbn:"-",
      ownerID:"-",
      phase:undefined,
      message1:"",
      message2:"",
      info:[]
    };
    this.changePhaseRequest=this.changePhaseRequest.bind (this);
  }


  changePhaseRequest(){
    fetch(`http://localhost:5000/createLoan/${this.state.bookID}/${this.context.firebaseID}`)
    .then((res)=>{return res.json();})
    .then(()=>{
      fetch(`http://localhost:5000/getbooktitle/${this.state.bookID}`)
      .then((res)=>{return res.json();})
      .then((titleJson)=>{
        console.log(titleJson)
        this.setState(
          {info:titleJson[0].title, 
           message1: "Has pedido prestado el libro, ", 
           message2:"Te llegará un correo electrónico cuando el dueño acepte tu petición."}
           )
      })
      .then(()=>{
        setTimeout(() => this.props.history.push('/'), 3300)
      })
      .catch(err => {console.log(err);});
  })
}

  componentDidMount(){
    let isbn=this.context.isbn
    fetch(`http://localhost:5000/onebookdetail/${isbn}`)
      .then((res) => {return res.json();})
      .then(bookJson => 
        {this.setState({
          bookID:bookJson[0].bookID,
          title:bookJson[0].title,
          authors: bookJson[0].authors,
          publisher: bookJson[0].publisher, 
          publishedDate: bookJson[0].publishedDate, 
          description: bookJson[0].description, 
          categories: bookJson[0].categories, 
          language: bookJson[0].language, 
          image: bookJson[0].image, 
          textSnippet: bookJson[0].textSnippet,
          isbn:bookJson[0].isbn,
          ownerID:bookJson[0].ownerID,
          phase:bookJson[0].phase
        })
        
      })
      .catch(err => {console.log(err);});
  }


  render() {
    return (
            <section className="container bg-white m-2 bookdetail">
            <div className="row">
              <img src={this.state.image} alt={this.state.title} className="book my-3 ml-3 col-5"></img>
              <div className="my-3 mx-1 col-6">
                <p className="uppercase dosis medium py-1 my-0">{this.state.title}</p>
                <p>{this.state.authors}</p>
                <div className="d-flex flex-column justify-content-between flex-md-row">
                  <div>
                    <p className="dosis uppercase pt-3  my-0">Editorial</p>
                    <p>{this.state.publisher}</p>
                  </div>
                  <div>
                    <p className="dosis uppercase pt-3 m-0">Fecha de publicación</p>
                    <p>{this.state.publishedDate}</p>
                  </div>
                </div>

                <p className="dosis uppercase pt-3 my-0">Idioma</p>
                <p>{this.state.language}</p>
                <p className="dosis uppercase pt-3 my-0">ISBN</p>
                <p className="mb-3">{this.state.isbn}</p>
                <span className="redbg boxrounded white mt-5">{this.state.categories}</span>
              </div>
              <div >
                <p className="mx-3">{this.state.description}</p>
              <div className="mb-3">
                <button onClick={this.changePhaseRequest} className="btn btn-green uppercase ml-3 mt-3 mb-2">Pedir prestado</button>
                <p className="greenbg white ml-3">{this.state.message1}{this.state.info}</p>
                <p className="greenbg white ml-3">{this.state.message2}</p>
              </div>
              </div>
            </div>
          </section>
    );
  }
}
MBookdetail.contextType=AuthContext;
export default withRouter(MBookdetail);

