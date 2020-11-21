import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import MLogin from '../../Components/MLogin/MLogin';
import MCatalogue from '../../Components/MCatalogue/MCatalogue';
import Footer from '../../Components/Footer/Footer';
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