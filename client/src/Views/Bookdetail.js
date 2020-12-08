import React, { Component } from 'react';
import Header from '../Components/Header';
import Back from '../Components/Back';
import MBookdetail from '../Components/MBookdetail';
// import Footer from '../Components/Footer';


class Bookdetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <Back/>
        <MBookdetail/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Bookdetail;