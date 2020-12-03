import React, { Component } from 'react';
import {Link} from "react-router-dom";

class MInstructions extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <section className="bg-white shadow d-flex flex-column signup instructions">
        <p className="child green title text-center  mt-3 mb-0">Instrucciones</p>
        <article className="overflow textinstructions mx-3 mb-4">
        <p>
          Libro Va es una plataforma digital para el intercambio de libros entre niños de un mismo colegio. Es una plataforma que pretende fomentar la lectura infantil, la comunidad y el hecho de compartir.
        </p>
        <br/>
        <p>
          Para dar de alta un libro, ve al area de usuario e introduce el ISBN del mismo, la aplicación se conecta a una API para mostrar la información necesaria, de esta manera, se evitan errores tipográficos y se ahorra tiempo. Para poder pedir prestado un libro será necesario que tenga compartidos al menos 10 de los suyos.
        </p>
        <br/>
        <p>
          El plazo máximo de préstamo de un libro será de 1 mes. El intercambio de los libros se realizará una vez a la semana en el espacio y hora fijado por el colegio.
        </p>
        <br/>
        <p>
        Para registrarte es necesario que introduzcas un correo electrónico, tuyo, o de tutor, así como un número de teléfono.
          Con e objetivo de preservar la identidad y la seguridad de todos los niños, en el registro, se cotejará el nombre del niño con el de la base de datos de alumnos del colegio. No permitiendo registrarse si no se es alumno.
        </p>
        <Link to="/">
          <button className="btn btn-green mt-3">IR AL CATÁLOGO</button>
        </Link>      
        </article>
      </section>
    );
  }
}


export default MInstructions;