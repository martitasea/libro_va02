import React, { Component } from 'react';

class MyBook extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="d-flex flex-column align-items-center mr-3 mb-3 mybook">
            <img src={this.props.src} alt={this.props.title} className="mybookimage"/>
            <div className="pl-0 pt-2">
              <p className="uppercase dosis mini py-0 my-0">{this.props.title}</p>
            </div>
        </div>
    );
  }
}

export default MyBook;