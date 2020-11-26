import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import MyBook from './MyBook';


class AllMyBooks extends Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
      isFetch:false
    };
    this.getAllMyBooks=this.getAllMyBooks.bind(this);
  }

getAllMyBooks(){
  console.log(this.state.books)
    return this.state.books.map((book)=>(
    <MyBook
      src={book.image}
      title={book.title}/>
  ))
}

// componentDidUpdate(prevProps, prevState){
//   if(prevState.books!==this.state.books){
//   let firebaseID=this.context.firebaseID
  // fetch("http://localhost:5000/allmybooks/"+firebaseID)
  //   .then((res) => {return res.json();})
  //   .then(booksJson => {this.setState({books:booksJson, isFetch:false})})
  //   .then(err => {console.log(err);});
// }
// }


componentDidMount(){
  let firebaseID=this.context.firebaseID
  fetch("http://localhost:5000/allmybooks/"+firebaseID)
    .then((res) => {return res.json();})
    .then(booksJson => {this.setState({books:booksJson, isFetch:true})})
    .catch(err => {console.log(err);});
}

  render() {
    return (
      <div className="bg-white mb-3">
        <a href="/" data-toggle="collapse" data-target="#allmybooks">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Todos mis libros
          </p>
        </a>
        <div id="allmybooks" className="collapse grey pl-2">
          <p className="grey pl-2 pb-2">Estos son los libros disponibles para prestar a tus compañeros:</p>
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