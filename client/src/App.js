import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'rsuite/lib/styles/index.less'; 
import Login from "./Views/Login";
import Instructions from "./Views/Instructions";
import Signup from "./Views/Signup";
import Catalogue from "./Views/Catalogue";
import Bookdetail from "./Views/Bookdetail";
import Userarea from "./Views/Userarea";
import Table from "./Views/Table";
import Charts from "./Views/Charts";
import Users from "./Views/Users";
import {AuthProvider} from './Context/AuthContext';
import './App.css';


function App() {
  const [rol, setRol] = useState('');
  const [name, setName] = useState('');
  const [firebaseID, setFirebaseID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tutorName, setTutorName] = useState('');
  const [login, setLogin] = useState('Iniciar Sesión');
  const [err, setErr]=useState(null);
  const [isbn, setIsbn]=useState('');
  const [sidebar, setSidebar]=useState(false);


  if(rol==="admin"){
    return(
    <div className="background">
      <AuthProvider value={{
        rol, setRol,
        name, setName, 
        firebaseID, setFirebaseID, 
        email, setEmail,
        password, setPassword,
        tutorName, setTutorName, 
        login, setLogin, 
        err, setErr, 
        isbn, setIsbn,
        sidebar, setSidebar
      }}>                   
          <BrowserRouter>
            <Switch>
              <Route exact path="/admin" component={Table}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/charts" component={Charts}/>
              <Route exact path="/users" component={Users}/>
            </Switch>
          </BrowserRouter>
      </AuthProvider>
    </div>
    )
  }else{
    return (
      <div className="background">
      <AuthProvider value={{
        rol, setRol,
        name, setName, 
        firebaseID, setFirebaseID, 
        email, setEmail,
        password, setPassword,
        tutorName, setTutorName, 
        login, setLogin, 
        err, setErr, 
        isbn, setIsbn,
        sidebar, setSidebar
      }}>                   
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Catalogue}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/instructions" component={Instructions}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/bookdetail" component={Bookdetail}/>
              <Route exact path="/userarea" component={Userarea}/>
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </div>
    );
  }
  
}

export default App;
