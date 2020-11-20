import React, { Component } from 'react';
import Header from '../Header/Header';
import MCatalogue from '../MCatalogue/MCatalogue';
import Footer from '../Footer/Footer';
import './Catalogue.css';

class Catalogue extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <Header/>
        <MCatalogue/>
        <Footer/>
      </div>
    );
  }
}

export default Catalogue;