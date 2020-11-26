import React, { Component } from 'react';
import { AuthConsumer } from '../Context/AuthContext';
import AuthContext from '../Context/AuthContext';

class MBookdetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"-",
      authors:"-",
      publisher:"-",
      publishedDate:"-",
      description:"-",
      categories:"-",
      language:"-",
      image:"-",
      textSnippet:"-",
      isbn:"-"
    };
  }

  componentDidMount(){
    let isbn=this.context.isbn
    fetch("http://localhost:5000/onebookdetail/"+isbn)
      .then((res) => {return res.json();})
      .then(bookJson => 
        {this.setState({
          title:bookJson[0].title,
          authors: bookJson[0].authors,
          publisher: bookJson[0].publisher, 
          publishedDate: bookJson[0].publishedDate, 
          description: bookJson[0].description, 
          categories: bookJson[0].categories, 
          language: bookJson[0].language, 
          image: bookJson[0].image, 
          textSnippet: bookJson[0].textSnippet,
          isbn:bookJson[0].isbn
        })
        
      })
      .catch(err => {console.log(err);});
  }


  render() {
    return (
      <AuthConsumer>
        {(contxt)=>(
            <section className="container bg-white m-2 bookdetail">
            <div className="row">
              <img src={this.state.image} alt={this.state.title} className="book my-3 ml-3 col-5"/>
              <div className="my-3 mx-1 col-6">
                <p className="uppercase dosis medium py-1 my-0">{this.state.title}</p>
                <p>{this.state.authors}</p>
                <p className="dosis uppercase pt-3 pb-1 my-0">Editorial</p>
                <p>{this.state.publisher}</p>
                <p className="dosis uppercase pt-3 pb-1 my-0">Idioma</p>
                <p>{this.state.language}</p>
              </div>
              <div className="mx-3">
                <p>{this.state.description}</p>
                <p className="dosis uppercase pt-3 pb-1 my-0">Fecha de publicación</p>
                <p>{this.state.publishedDate}</p>
                <p className="dosis uppercase pt-3 pb-1 my-0">ISBN</p>
                <p>{this.state.isbn}</p>
              </div>
              <button className="btn btn-green uppercase m-3">Pedir prestado</button>
            </div>
          </section>
        )}
      </AuthConsumer>
    );
  }
}
MBookdetail.contextType=AuthContext;
export default MBookdetail;