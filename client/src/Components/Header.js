import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {AuthConsumer} from '../Context/AuthContext';

class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center">
        {/* <Link to="/userarea"> */}
          <i onClick={(e)=>{
            e.preventDefault()
            console.log("HOla")
          }}
          className="fas fa-bars userIcon"></i>
        {/* </Link> */}
        <Link to="/catalogue">
          <img src="./media/logo.svg" alt="Logo Libro va" className="logo"/>
        </Link>
        <Link to="/instructions">
        <i class="fas fa-exclamation-circle questionIcon"></i>
          {/* <i className="fas fa-question-circle questionIcon"></i> */}
        </Link>
      </div>

      // <form className="col-12 col-md-7 offset-md-0 border-blue-2 search d-flex justify-content-between my-2 my-md-3 mx-md-0 offset-lg-0 order-md-1"> */}
      // <input type="search" className="border-0 width70 search transparent"/> */}
      // <i className="fas fa-search loupe mt-2"></i> */}
      // </form> */}
    );
  }
}

export default Header;