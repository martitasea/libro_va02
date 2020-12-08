import React, { Component } from 'react';
import Header from '../Components/Header';
import User from '../Components/User';
import Back from '../Components/Back';


class Userarea extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

    render() {
    return (
      <div>
        <Header/>
        <Back/>
        <User/>
      </div>
    );
  }
}

export default Userarea;