import React, { Component } from 'react';
import Header from '../Components/Header';
import MCatalogue from '../Components/MCatalogue';
import Footer from '../Components/Footer';


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
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Catalogue;