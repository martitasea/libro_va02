import React, { Component } from 'react';
import AddBook from './AddBook';
import ReadingBook from './ReadingBook';
import AllMyBooks from './AllMyBooks';
import AskedBooks from './AskedBooks';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       <div>
          <div className="d-flex margin-user mb-0">
          </div>
          <AskedBooks/>
          <ReadingBook/>
          <AllMyBooks/>
          <AddBook/>
      </div>
    );
  }
}

export default User;