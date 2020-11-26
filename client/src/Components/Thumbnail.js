import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { AuthConsumer } from '../Context/AuthContext';

class Thumbnail extends Component {
  constructor(props){
    super(props);
    this.state = {
      state:this.props.state,
      link:"/bookdetail/"+this.props.isbn,
      book:{}
    };
    this.getState=this.getState.bind(this);
    this.fijarIsbn=this.fijarIsbn.bind(this);
  }

getState(){
  if(this.state.state==="rest")
  {return "¡PIDELO!"}
  else {return "NO DISPONIBLE"}
}

fijarIsbn(contxt){
  contxt.setIsbn(this.props.isbn)
  console.log(contxt.isbn)
}

  render() {
    return (
      <AuthConsumer>
        {(contxt)=>(
            <div className="col-4 col-sm-3 col-md-2 p-1">
            <Link to="/bookdetail">
              <div className="bg-white shadow m-1 d-flex flex-column align-items-center file-thumbnail" 
              onClick={(e)=>{
                  // e.preventDefault();
                  this.fijarIsbn(contxt);
                }}
                // console.log(this.props.isbn)
              >
                <img src={this.props.src} alt={this.props.alt} className="thumbnail-book mt-2"/>
                    <div className="overlay mt-2">
                      <p className="mini text-inf m-0 text-rent">{this.getState()}</p>
                    </div>
                      <p className="dosis grey mini mx-2 my-2 text-center text-title">{this.props.title}</p>
              </div>
              </Link>
          </div>
        )} 
      </AuthConsumer>
    );
  }
}

export default Thumbnail;