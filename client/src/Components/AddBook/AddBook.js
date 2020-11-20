import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './AddBook.css';

class AddBook extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="bg-white mb-5">

        <a data-toggle="collapse" data-target="#addbook">
          <p className="child blue title pt-2 pl-2 mb-0">
            <span className="childIcon blue">f </span>Añadir un libro
          </p>
        </a>

        <div id="addbook" class="collapse grey px-2 pb-2">
          <p>Busca en las primera páginas de tu libro el código ISBN e introdúcelo::</p>
          <form className="mb-3">
            <div>
              <p className="mb-1 grey mini">ISBN</p>
              <input type="text" className="p-1 mb-2 grey width100 border-blue-1"/>
            </div>
            <Link to="/userarea">  
              <button className="btn btn-blue mt-2">AÑADIR</button>
            </Link>
          </form>
        </div>

      </div>  
    );
  }
}

export default AddBook;