import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import MCatalogue from '../../Components/MCatalogue/MCatalogue';
import Footer from '../../Components/Footer/Footer';
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