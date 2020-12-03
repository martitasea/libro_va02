import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import LoanTable from '../Components/LoanTable';
import ReturnTable from '../Components/ReturnTable';
import Header from '../Components/Header';



class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    if(this.context.firebaseID==="6THbQtBfDDS8Cu5KNf8r9lK8IEg2"){
   return(
    <div className="tablita">
      <Header/>
      <LoanTable/>
      <ReturnTable/>
    </div>
      )}
      return(
      <div>
        <Header/>
          <div className="shadow bg-white mb-3">
            <a href="/" data-toggle="collapse" data-target="#allmybooksloggedout">
              <p className="child blue title pt-2 pl-2 mb-0">
                <span className="childIcon blue">f </span>MI BIBLIOTECA
              </p>
            </a>
            <div id="allmybooksloggedout" className="collapse grey pl-2">
              <p className="grey pb-2">No puedes acceder al panel de administración si no eres el administrador.</p>
              <Link to="/login">
                <input type="text" value="INICIAR SESIÓN" className="btn btn-green my-2 px-2"/>
              </Link>
            </div>
        </div>  
    </div>
    )
}
}

Table.contextType=AuthContext;
export default Table;