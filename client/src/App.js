import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Views/Login/Login";
import Instructions from "./Views/Instructions/Instructions";
import Signup from "./Views/Signup/Signup";
import Catalogue from "./Views/Catalogue/Catalogue";
import Bookdetail from "./Views/Bookdetail/Bookdetail";
import Userarea from "./Views/Userarea/Userarea";
import Adminarea from "./Views/Adminarea/Adminarea";
import {AuthProvider} from './Context/AuthContext';
import './App.css';

function App() {
  const [name, setName] = useState('Ines');
  const [email, setEmail] = useState('prueba@gmail.com');
  const [password, setPassword] = useState('admin1234');
  const [parents, setParents] = useState('parent');
  const [phone, setPhone] = useState('123456789');

  return (
    <div className="background">
      <AuthProvider value={{name, setName, email, setEmail, password, setPassword, parents, setParents, phone, setPhone}}>
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
