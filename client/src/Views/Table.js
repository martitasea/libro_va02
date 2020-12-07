import React, { Component } from 'react';
import LoanTable from '../Components/LoanTable';
// import ReturnTable from '../Components/ReturnTable';
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
      <LoanTable/>
    </div>
  )}
}


export default Table;