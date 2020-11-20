import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Header.css';

class Header extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {};
  // }


  render() {
    return (
      <div className="container-fluid container-lg container-xl bg-primary">
     <section className="row bg-cyan header position-fixed fixed-top mx-1">
       <div className="col-4 col-md-3 order-md-0 p-0 m-0">
         <Link to="/catalogue">
            <img src="./media/logo.svg" alt="Logo Libro va" className="img-fluid mt-2"/>
         </Link>
       </div>
       <div className="col-1 offset-6  pl-1 offset-md-0 order-md-2">
         <Link to="/userarea">
            <i class="fas fa-child userIcon mt-2 mx-1 my-md-3 mx-md-0"></i>
         </Link>
       </div>
        <div className="col-1 offset-md-0 order-md-2 pl-0">
          <Link to="/instructions">
            <i class="fas fa-question-circle questionIcon mt-2 mx-1 my-md-3  px-md-1"></i>
          </Link>
        </div>
       <form className="col-12 col-md-7 offset-md-0 border-blue-2 search d-flex justify-content-between my-2 my-md-3 mx-md-0 offset-lg-0 order-md-1">
         <input type="search" className="border-0 width70 search transparent"/>
         <i class="fas fa-search loupe mt-2"></i>
       </form>
     </section>
     </div>
      

    );
  }
}

export default Header;