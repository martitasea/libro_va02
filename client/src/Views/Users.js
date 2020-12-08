import React, { Component } from 'react';
import ListUsers from '../Components/ListUsers';
import Header from '../Components/Header';
import Back from '../Components/Back';



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
      <Back/>
      <ListUsers/>      
    </div>
      )}
}

export default Users;