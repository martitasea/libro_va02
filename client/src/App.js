import React, {useState} from 'react';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import { Sidenav } from 'rsuite';
import 'rsuite/lib/styles/index.less'; 
import Login from "./Views/Login";
import Instructions from "./Views/Instructions";
import Signup from "./Views/Signup";
import Catalogue from "./Views/Catalogue";
import Bookdetail from "./Views/Bookdetail";
import Userarea from "./Views/Userarea";
import Adminarea from "./Views/Adminarea";
import {AuthProvider} from './Context/AuthContext';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [firebaseID, setFirebaseID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('Iniciar Sesión');
  const [err, setErr]=useState(null);
  const [isbn, setIsbn]=useState('');
  const [sidebar, setSidebar]=useState(false);

  return (
    <div className="background">
    <AuthProvider value={{
          name, setName, 
          firebaseID, setFirebaseID, 
          email, setEmail,
          password, setPassword, 
          login, setLogin, 
          err, setErr, 
          isbn, setIsbn,
          sidebar, setSidebar
          }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/instructions" component={Instructions}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/catalogue" component={Catalogue}/>
            <Route exact path="/bookdetail" component={Bookdetail}/>
            <Route exact path="/userarea" component={Userarea}/>
            <Route exact path="/adminarea" component={Adminarea}/>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
