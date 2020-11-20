import React, { Component } from 'react';
import Header from '../Header/Header';
import User from '../User/User';
import Footer from '../Footer/Footer';
import './Userarea.css';

class Userarea extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

    render() {
    return (
      <div>
        <Header/>
        <User/>
        <Footer/>
      </div>
    );
  }
}

export default Userarea;