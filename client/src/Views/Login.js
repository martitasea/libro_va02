import React, { Component } from 'react';
import Header from '../Components/Header';
import MLogin from '../Components/MLogin';
import MCatalogue from '../Components/MCatalogue';
import Footer from '../Components/Footer';


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