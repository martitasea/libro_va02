import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import User from '../../Components/User/User';
import Footer from '../../Components/Footer/Footer';
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