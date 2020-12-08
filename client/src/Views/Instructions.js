import React, { Component } from 'react';
import Header from '../Components/Header';
import MInstructions from '../Components/MInstructions';
import Back from '../Components/Back';


class Instructions extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <Back/>
        <MInstructions/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Instructions;