import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import AddBook from '../AddBook/AddBook';
import AskedBook from '../AskedBook/AskedBook';
import AllMyBooks from '../AllMyBooks/AllMyBooks';
import './User.css';

class User extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div>
        <p className="child blue title margin-header">
          <span className="childIcon blue">s</span>
          Hola Inés
          <span className="childIcon blue">s</span>
        </p>
        <Notifications/>
        <AskedBook/>
        <AllMyBooks/>
        <AddBook/>
      </div>
    );
  }
}

export default User;