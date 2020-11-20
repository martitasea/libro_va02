import React, { Component } from 'react';
import MyBook from '../MyBook/MyBook';
import './AllMyBooks.css';

class AllMyBooks extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="bg-white mb-3">
        <a data-toggle="collapse" data-target="#allmybooks">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Todos mis libros
          </p>
        </a>
        <div id="allmybooks" class="collapse grey pl-2 pb-2">
          <p>Estos son los libros disponibles para prestar a tus compañeros:</p>
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

export default AllMyBooks;