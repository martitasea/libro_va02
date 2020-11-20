import React, { Component } from 'react';
import './MyBook.css';

class MyBook extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
        <div className="d-flex flex-column align-items-center mr-3 mb-3">
            <img src="./media/dedo.jpg" alt="El dedo en la nariz" className="mybook"/>
            <div className="pl-0">
              <p className="uppercase dosis py-0 my-0">El dedo en la nariz</p>
            </div>
        </div>
    );
  }
}

export default MyBook;