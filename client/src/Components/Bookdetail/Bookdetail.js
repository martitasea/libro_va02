import React, { Component } from 'react';
import Header from '../Header/Header';
import MBookdetail from '../MBookdetail/MBookdetail';
import Footer from '../Footer/Footer';
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