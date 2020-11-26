import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import MyBook from './MyBook';


class AllMyBooks extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

componentDidMount(){
  let firebaseID=this.context.firebaseID
  console.log(firebaseID)
  fetch("http://localhost:5000/allmybooks/"+firebaseID)
    .then((res) => {
      console.log("La respuesta del servidor");
      console.log(res.json);
      return res.json();
    })
    .then(books => {
      books.map((book)=>{
        console.log(book.title)
        console.log(book.description)
      })
      // console.log(books)
      // console.log(books[0].title)

      //HACER UN MAP CON LOS RESULTADOS Y RENDERIZARLOS EN SU SITO
    }
    )
    .then(err => {
      console.log(err);
    });
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
            <MyBook/>
            <MyBook/>
            <MyBook/>
            <MyBook/>
          </div>
        </div>
    </div>  
    );
  }
}
AllMyBooks.contextType=AuthContext;
export default AllMyBooks;