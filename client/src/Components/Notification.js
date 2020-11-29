import React, { Component } from 'react';

class Notification extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
        <div className="d-flex justify-content-start mb-3">
            <img src={this.props.src} alt={this.props.title} className="book col-5"/>
            <div className="pl-3">
                <p className="uppercase dosis py-0 my-0">{this.props.title}</p>
                <p>{this.props.author}</p>
                <button className="mt-2 btn btn-blue">PRESTAR</button>
            </div>
        </div>

    );
  }
}
export default Notification;