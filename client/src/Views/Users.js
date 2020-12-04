import React, { Component } from 'react';
import ListUsers from '../Components/ListUsers';
import Header from '../Components/Header';



class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
   return(
    <div>
      <Header/>
      <ListUsers/>      
    </div>
      )}
}

export default Users;