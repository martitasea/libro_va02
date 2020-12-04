import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import LoanTable from '../Components/LoanTable';
import ReturnTable from '../Components/ReturnTable';
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
      <ReturnTable/>
    </div>
  )}
}

Table.contextType=AuthContext;
export default Table;