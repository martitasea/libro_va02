import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { auth } from '../firebaseConfig';
import {AuthConsumer} from '../Context/AuthContext';

function NavBar (props) {
    const[sidebar, setSidebar]=useState(false);
    const showSidebar = () =>setSidebar(!sidebar);

        
return (
        <>
         <div className="navbar">
            <Link to="#" className="menu-bars">
                <i onClick={showSidebar}
                    className="fas fa-bars userIcon"></i>
            </Link>
        </div>
        
        <nav className={sidebar ? "nav-menu active shadow" : "nav-menu shadow"}>
            <ul onClick={showSidebar} className="nav-menu-items d-flex flex-column justify-content-start">
                <li className="nav-menu-items mx-4 my-3">
                    <Link to="#" className="menu-bars">
                        <i className="fas fa-times userIcon"></i>
                    </Link>
                </li>
                <li className="nameNavBar my-2 ml-3">
                    <Link to="#" className="menu-bars">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-child logoutIcon mr-2"></i>
                            <p className="width100 d-flex justify-content-start align-items-center blue nav-bar-item pl-1 py-1">{props.name}</p>
                        </div>
                    </Link>
                </li>
                <hr/>
                <li className="catalogueNavBar my-2 ml-3">
                    <Link to={props.link1} className="menu-bars">
                       <p className="d-flex justify-content-start align-items-center blue nav-bar-item pl-1 py-1">{props.text1}</p>
                    </Link>
                </li>
                <li className="userNavBar my-2 ml-3">
                    <Link to={props.link2} className="menu-bars">
                       <p className="d-flex justify-content-start align-items-center blue nav-bar-item pl-1 py-1">{props.text2}</p>
                    </Link>
                </li>
                <li className="instructionsNavBar my-2 ml-3">
                    <Link to={props.link3} className="menu-bars">
                       <p className="d-flex justify-content-start align-items-center blue nav-bar-item pl-1 py-1">{props.text3}</p>
                    </Link>
                </li>
                <hr/>
                <li className="logoutNavBar my-2 ml-4">
                <AuthConsumer>
                {(contxt)=>(
                    <Link to="#" className="menu-bars">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-sign-out-alt logoutIcon mr-2"></i> 
                            <a href="/login" type="button" className="d-flex justify-content-start align-items-center blue pl-1 py-1"
                                 onClick={(e)=>{
                                    e.preventDefault();
                                    auth.signOut()
                                    .then((res)=> {
                                      contxt.setName('');
                                      contxt.setEmail('');
                                      contxt.setFirebaseID('');
                                      contxt.setLogin("Iniciar Sesión")
                                      console.log("Sign-out successful");
                                    })
                                }}
                                    >
                                {props.log}
                            </a>
                        </div>
                    </Link>
                )}
                </AuthConsumer>
                </li>
                <li className="school mb-2 ml-4">              
                    <p className="d-flex justify-content-start align-items-center child grey">COLEGIO ÁGORA</p>
                </li>
            </ul>
        </nav>
       
        </>
    );

}

export default NavBar;