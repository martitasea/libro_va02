import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import MBookdetail from '../../Components/MBookdetail/MBookdetail';
import Footer from '../../Components/Footer/Footer';
import './Bookdetail.css';

class Bookdetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <MBookdetail/>
        <Footer/>
      </div>
    );
  }
}

export default Bookdetail;