import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import MSignup from '../../Components/MSignup/MSignup';
import Footer from '../../Components/Footer/Footer';
import MCatalogue from '../../Components/MCatalogue/MCatalogue';
import './Signup.css';

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