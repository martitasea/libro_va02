import React, { Component } from 'react';

class Back extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <article className="col-12 order-md-4 m-0">
            <span className="symbol childIcon green">i</span>
            <span className="m-1 back title child green">Volver</span>
        </article>   
    );
  }
}

export default Back;