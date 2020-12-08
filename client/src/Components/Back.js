import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Back extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <article className="pt-3 pr-2"
        onClick={(e)=>{
          e.preventDefault();
          this.props.history.goBack();
        }}>
          <p className="m-1 back title child green">
              <span className="symbol mini childIcon green">i </span>Volver
              </p>
        </article>   
    );
  }
}

export default withRouter(Back);