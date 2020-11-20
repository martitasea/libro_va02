import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <form className="col-12 col-md-6 offset-md-1 offset-lg-0 order-md-1 border-blue-2 p-2 mt-sm-3 width100 search d-flex justify-content-between">
            <input type="search" className="border-0 width90 transparent"/>
            <img src="./media/search.svg" alt="Lupa" className="loupe"/>
        </form>
    );
  }
}

export default Search;