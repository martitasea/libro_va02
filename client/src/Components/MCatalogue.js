import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

class MCatalogue extends Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
    };
    this.getAllCatalogue=this.getAllCatalogue.bind(this);
  }


getAllCatalogue(){
  console.log(this.state.books)
  return this.state.books.map((book)=>(
  <Thumbnail
    src={book.image}
    title={book.title}
    state={book.state}
    isbn={book.isbn}
  />
    ))
}


componentDidMount(){
  let firebaseID=this.context.firebaseID
  fetch("http://localhost:5000/allcatalogue/"+firebaseID)
    .then((res) => {return res.json();})
    .then(booksJson => {this.setState({books:booksJson})})
    .catch(err => {console.log(err);});
}

  render() {
    return (
      <div className="mcatalogue container mt-3 sheet mb-5">
        <div className="row d-flex justify-content-center">
          {this.getAllCatalogue()}
        </div>
      </div>
    );
  }
}

export default MCatalogue;