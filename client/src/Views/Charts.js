import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import Header from '../Components/Header';

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
     <p>Gráficos</p>
    </div>
      )}
}

Charts.contextType=AuthContext;
export default Charts