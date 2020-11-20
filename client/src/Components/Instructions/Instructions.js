import React, { Component } from 'react';
import Header from '../Header/Header';
import MInstructions from '../MInstructions/MInstructions';
import Footer from '../Footer/Footer';
import './Instructions.css';

class Instructions extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <MInstructions/>
        <Footer/>
      </div>
    );
  }
}

export default Instructions;