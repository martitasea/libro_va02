import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MSignup.css';
import {AuthConsumer} from '../../Context/AuthContext';
import { auth } from '../../firebaseConfig';

class MSignup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      password:"",
      tutorName:"",
      phone:"",
      id:"",
    };
    this.setName=this.setName.bind(this);
    this.setEmail=this.setEmail.bind(this);
    this.setPassword=this.setPassword.bind(this)
    this.setTutorName=this.setTutorName.bind(this)
    this.setPhone=this.setPhone.bind(this)
    this.createUser=this.createUser.bind(this);
  }

  setName(e){this.setState({name: e.target.value})}
  setEmail(e){this.setState({email: e.target.value})}
  setPassword(e){this.setState({password: e.target.value})}
  setTutorName(e){this.setState({tutorName: e.target.value})}
  setPhone(e){this.setState({phone: e.target.value})}
  

  createUser(e, contxt){
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res)=> this.setState({id:res.user.uid}))
  }


  render() {
    return (
      <AuthConsumer>
        {(contxt)=>(
            <div className="overlay-cyan">
              <section className="bg-white d-flex flex-column mt-3 signup">
                <p className="child green title text-center  mt-3 mb-0">Registrarse</p>
                <form onSubmit={this.createUser} className="mx-3 mb-3">
                  <div>
                    <label for="Nombre" className="mb-1 grey mini">NOMBRE</label>
                    <input onChange={this.setName} type="text" id="name" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div>
                    <label for="Correo Electrónico" className="mb-1 mt-3 grey mini">CORREO ELECTRÓNICO</label>
                    <input onChange={this.setEmail} type="mail" id="mail" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div>
                    <label for="Contraseña" className="mb-1 mt-3 grey mini">CONTRASEÑA</label>
                    <input onChange={this.setPassword} type="password" id="password" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div>
                    <label for="Nombre Padre/Madre/Tutor" className="mb-1 mt-3 grey mini">NOMBRE PADRE/MADRE/TUTOR</label>
                    <input onChange={this.setTutorName} type="text" id="tutorName" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div>
                    <label for="Teléfno Padre/Madre/Tutor" className="mb-1 mt-3 grey mini">TELÉFONO PADRE/MADRE/TUTOR</label>
                    <input onChange={this.setPhone} type="phone" id="phoneTutor" className="p-1 grey width100 border-blue-1"/>
                  </div>
                  <div className="d-flex justify-content-center mt-4 mb-2">
                  <input type="submit" value="REGISTRARSE" className="btn btn-green"></input>
                  </div>
                </form>
              </section>
            </div>
         )}
      </AuthConsumer>
    );
  }
}

export default MSignup;