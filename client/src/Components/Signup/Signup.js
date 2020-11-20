import React, { Component } from 'react';
import Header from '../Header/Header';
import MSignup from '../MSignup/MSignup';
import Footer from '../Footer/Footer';
import './Signup.css';
import MCatalogue from '../MCatalogue/MCatalogue';

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
        <Footer/>
      </div>
    );
  }
}

export default Signup;