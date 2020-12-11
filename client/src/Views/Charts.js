import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import Header from '../Components/Header';
import ChartOne from '../Components/ChartOne';
import Back from '../Components/Back';

class Charts extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }


  render() {
   return(
    <div>
      <Header/>
      <Back/>
      <div className="d-flex flex-row justify-content-between">
        <ChartOne/>
      </div>
    </div>
      )}
}

Charts.contextType=AuthContext;
export default Charts