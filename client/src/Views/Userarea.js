import React, { Component } from 'react';
import Header from '../Components/Header';
import User from '../Components/User';
import Footer from '../Components/Footer';


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
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Userarea;