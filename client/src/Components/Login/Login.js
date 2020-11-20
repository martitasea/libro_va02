import React, { Component } from 'react';
import Header from '../Header/Header';
import MLogin from '../MLogin/MLogin';
import MCatalogue from '../MCatalogue/MCatalogue';
import Footer from '../Footer/Footer';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <MLogin/>
        <MCatalogue/>
        <Footer/>
      </div>
    );
  }
}

export default Login;