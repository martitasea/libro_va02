import React, { Component } from 'react';
import Header from '../Components/Header';
import MBookdetail from '../Components/MBookdetail';
import Footer from '../Components/Footer';


class Bookdetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <MBookdetail/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Bookdetail;