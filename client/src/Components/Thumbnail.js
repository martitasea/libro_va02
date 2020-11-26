import React, { Component } from 'react';

class Thumbnail extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div className="col-4 col-sm-3 col-md-2 p-1">
        <div className="bg-white shadow m-1 d-flex flex-column align-items-center file-thumbnail">
          <img src={this.props.src} alt={this.props.alt} className="thumbnail-book mt-2"/>
            <div className="overlay mt-2">
              <p className="mini text-inf m-0 text-rent">PEDIR PRESTADO</p>
            </div>
              <p className="dosis grey mini mx-2 my-2 text-center text-title">{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Thumbnail;