import React, { Component } from 'react';
import LoanTable from '../Components/LoanTable';
import Back from '../Components/Back';
import Header from '../Components/Header';



class Table extends Component {
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
      <LoanTable/>
    </div>
  )}
}


export default Table;