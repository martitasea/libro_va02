import React, { Component } from 'react';
import { auth } from '../firebaseConfig';
import 'firebase/auth';
import {withRouter, Link} from "react-router-dom";
import {AuthConsumer} from '../Context/AuthContext';

class MSignup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      tutorName:"",
      firebaseID:"",
      err:"",
    };
    this.setName=this.setName.bind(this);
    this.setEmail=this.setEmail.bind(this);
    this.setPassword=this.setPassword.bind(this);
    this.setPhone=this.setPhone.bind(this);
    this.setTutorName=this.setTutorName.bind(this);
    this.createUser=this.createUser.bind(this);
  }

  setName(e){this.setState({name: e.target.value})}
  setEmail(e){this.setState({email: e.target.value})}
  setPassword(e){this.setState({password: e.target.value})}
  setPhone(e){this.setState({phone: e.target.value})}
  setTutorName(e){this.setState({tutorName: e.target.value})}


  createUser(contxt){
    let user = {
      firebaseID: this.state.firebaseID,
      email:this.state.email,
      name:this.state.name,
      tutorName:this.state.tutorName,
      phone:this.state.phone,
      password:this.state.password
    };
    fetch("http://localhost:5000/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
  })
}


  render() {
    return (
      <AuthConsumer>
        {(contxt)=>(
            <div className="overlay-cyan">
              <section className="bg-white d-flex flex-column mt-3 signup">
                <p className="child green title text-center  mt-3 mb-0">Registrarse</p>
                <form action="/createuser" method="post" className="mx-3 mb-3" 
                  onSubmit={(e)=>{
                    e.preventDefault();
                    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((res)=>{
                      contxt.setName(this.state.name);
                      contxt.setFirebaseID(res.user.uid);
                      this.setState({firebaseID: res.user.uid})
                      contxt.setLogin("Cerrar Sesión");
                      this.createUser();
                      this.props.history.push("/userarea")
                    })
                    .catch((err)=> 
                        {if(err.code==="auth/email-already-in-use")
                        {this.setState({err:"Ese mail ya está registrado, prueba con otro"})}
                        else if(err.code==="auth/weak-password")
                        {this.setState({err:"La contraseña debe tener al menos 6 caracteres."})}
                        }
                    )
                  }}
                >
                  <div>
                    <label className="mb-1 grey mini">NOMBRE</label>
                    <input onChange={this.setName} type="text" id="name" name="name" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div>
                    <label className="mb-1 mt-3 grey mini">CORREO ELECTRÓNICO</label>
                    <input onChange={this.setEmail} type="mail" id="email" name="email" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div>
                    <label className="mb-1 mt-3 grey mini">CONTRASEÑA</label>
                    <input onChange={this.setPassword} type="password" id="password" name="password" className="p-1 grey width100 border-blue-1" autoComplete="new-password"/>
                  </div>
                  <div>
                    <label className="mb-1 mt-3 grey mini">NOMBRE PADRE/MADRE/TUTOR</label>
                    <input onChange={this.setTutorName} type="text" id="tutorName" name="tutorName" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div>
                    <label className="mb-1 mt-3 grey mini">TELÉFONO PADRE/MADRE/TUTOR</label>
                    <input onChange={this.setPhone} type="phone" id="phone" name="phone" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <p className="dosis mini red mt-2">{this.state.err}</p>
                  <div className="d-flex justify-content-center mt-4 mb-2">
                  <input type="submit" value="REGISTRARSE" className="btn btn-green"></input>
                  <Link to="/">
                    <button className="btn btn-green-ghost">o  Iniciar sesión</button>
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

export default withRouter(MSignup);