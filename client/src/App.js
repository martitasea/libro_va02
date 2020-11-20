import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
import Instructions from "./Components/Instructions/Instructions";
import Signup from "./Components/Signup/Signup";
import Catalogue from "./Components/Catalogue/Catalogue";
import Bookdetail from "./Components/Bookdetail/Bookdetail";
import Userarea from "./Components/Userarea/Userarea";
import Adminarea from "./Components/Adminarea/Adminarea";
import './App.css';

function App() {
  return (
    <div className="background">
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
 
    </div>
  );
}

export default App;
