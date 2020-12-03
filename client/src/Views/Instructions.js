import React, { Component } from 'react';
import Header from '../Components/Header';
import MInstructions from '../Components/MInstructions';
// import Footer from '../Components/Footer';


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
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Instructions;