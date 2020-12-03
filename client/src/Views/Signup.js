import React, { Component } from 'react';
import Header from '../Components/Header';
import MSignup from '../Components/MSignup';
// import Footer from '../Components/Footer';
import MCatalogue from '../Components/MCatalogue';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <MSignup/>
        <MCatalogue/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Signup;