import React, { Component } from 'react';
import {withRouter, Link} from "react-router-dom";
import AuthConsumer from '../Context/AuthContext';
import { auth } from '../firebaseConfig';


class MLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      password:"",
      tutorName:"",
      phone:"",
      firebaseID:"",
      login:"",
    };
    this.setEmail=this.setEmail.bind(this);
    this.setPassword=this.setPassword.bind(this);
  }

setEmail(e){this.setState({email: e.target.value})}
setPassword(e){this.setState({password: e.target.value})}

  render() {
    return (
      <AuthConsumer>
        {(contxt)=>(
          <div className="overlay-cyan">
            <section className="bg-white d-flex flex-column login">
              <p className="child green title text-center my-3">Iniciar sesión</p>
              <form className="mx-3 mb-3"
                onSubmit={(e)=>{
                  e.preventDefault();
                  auth.signInWithEmailAndPassword(this.state.email, this.state.password)
                  .then((res)=> {
                    contxt.setEmail(this.state.email);
                    contxt.setFirebaseID(res.user.uid);
                    contxt.setLogin("Cerrar Sesión");
                    this.props.history.push("/catalogue");
                  })
                  .catch((err)=>
                    console.log(err)
                  )
                }
                }>
                <div>
                  <label className="mb-1 grey mini">CORREO ELECTRÓNICO</label>
                  <input onChange={this.setEmail} type="mail" className="p-1 grey width100 border-blue-1"/>
                </div>
                <div>
                  <label className="mb-1 mt-3 grey mini">CONTRASEÑA</label>
                  <input onChange={this.setPassword} type="password" id="password" className="p-1 grey width100 border-blue-1"/>
                  <p className="dosis mini grey mt-2">{this.state.login}</p>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-2">
                  <input type="submit" value="ENTRAR" className="btn btn-green px-2"/>
                  <Link to="/signup">
                    <button className="btn btn-green-ghost">o  Registrarse</button>
                  </Link>
                </div>
              </form>
            </section>
          </div>
        )}
      </AuthConsumer>
    );
  }
}          

export default withRouter(MLogin);