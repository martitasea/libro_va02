import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import MInstructions from '../../Components/MInstructions/MInstructions';
import Footer from '../../Components/Footer/Footer';
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