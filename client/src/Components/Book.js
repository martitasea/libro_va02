import React, { Component } from 'react';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div onClick={this.props.onClick} className="ml-3 shadow d-flex flex-column mybook mb-3">
            <img src={this.props.src} alt={this.props.title} className="mybookimage m-2"/>
            <div className="d-flex flex-row justify-content-between title-icon mx-2 mb-2">
              <p className="uppercase dosis mini">{this.props.title}</p>
              <i className={this.props.classIcon}></i>
            </div>
        </div>
    );
  }
}

export default Book;