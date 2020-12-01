import React, { useState } from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../Context/AuthContext';

function NavBar () {
    const[sidebar, setSidebar]=useState(false);
    const showSidebar = () =>setSidebar(!sidebar);

        
return (
        <>
       
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <i onClick={showSidebar}
                    class="fas fa-bars userIcon"></i>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active shadow" : "nav-menu shadow"}>
            <ul onClick={showSidebar} className="nav-menu-items d-flex flex-column justify-content-start">
                <li className="nav-menu-items mx-4 my-3">
                    <Link to="#" className="menu-bars">
                        <i class="fas fa-times userIcon"></i>
                    </Link>
                </li>
                <li className="nameNavBar my-2 ml-4">
                    <Link to="#" className="menu-bars">
                        <div className="d-flex align-items-center">
                            <i class="fas fa-child logoutIcon mr-2"></i>
                            <p className="d-flex justify-content-start align-items-center blue">Marta Pulido</p>
                        </div>
                    </Link>
                </li>
                <hr/>
                <li className="catalogueNavBar my-2 ml-4">
                    <Link to="/catalogue" className="menu-bars">
                       <p className="d-flex justify-content-start align-items-center blue">Catálogo</p>
                    </Link>
                </li>
                <li className="userNavBar my-2 ml-4">
                    <Link to="/userarea" className="menu-bars">
                       <p className="d-flex justify-content-start align-items-center blue">Área de Usuario</p>
                    </Link>
                </li>
                <li className="instructionsNavBar my-2 ml-4">
                    <Link to="/instructions" className="menu-bars">
                       <p className="d-flex justify-content-start align-items-center blue">Sobre LibroVa</p>
                    </Link>
                </li>
                <hr/>
                <li className="logoutNavBar my-2 ml-4">
                    <Link to="#" className="menu-bars">
                        <div className="d-flex align-items-center">
                            <i class="fas fa-sign-out-alt logoutIcon mr-2"></i>
                            <p className="d-flex justify-content-start align-items-center blue">Cerrar Sesión</p>
                        </div>
                    </Link>
                </li>
                <li className="school mb-2 ml-4">              
                    <p className="d-flex justify-content-start align-items-center child grey">COLEGIO ÁGORA</p>
                </li>
            </ul>
        </nav>
    
        </>
    //   <div className="d-flex justify-content-between align-items-center">
    //     {/* <Link to="/userarea"> */}
    //       <i onClick={(e)=>{
    //         e.preventDefault()
    //         console.log("HOla")
    //       }}
    //       className="fas fa-bars userIcon"></i>
    //     {/* </Link> */}
    //     <Link to="/catalogue">
    //       <img src="./media/logo.svg" alt="Logo Libro va" className="logo"/>
    //     </Link>
    //     <Link to="/instructions">
    //     <i class="fas fa-exclamation-circle questionIcon"></i>
    //       {/* <i className="fas fa-question-circle questionIcon"></i> */}
    //     </Link>
    //   </div>

      // <form className="col-12 col-md-7 offset-md-0 border-blue-2 search d-flex justify-content-between my-2 my-md-3 mx-md-0 offset-lg-0 order-md-1"> */}
      // <input type="search" className="border-0 width70 search transparent"/> */}
      // <i className="fas fa-search loupe mt-2"></i> */}
      // </form> */}
    );

}
// NavBar.contextType=AuthContext;
export default NavBar;