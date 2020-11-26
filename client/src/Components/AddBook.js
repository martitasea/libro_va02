import React, { Component } from 'react';
import {AuthConsumer} from '../Context/AuthContext';
import {withRouter} from "react-router-dom";

class AddBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      newIsbn:"",
      firebaseID:""
    };
    this.setAddIsbn=this.setAddIsbn.bind(this);
    this.getBookApi=this.getBookApi.bind(this);
  }

setAddIsbn(e){this.setState({newIsbn: e.target.value})}

getBookApi(contxt){
  let newBook={
    newIsbn:this.state.newIsbn,
    firebaseID: contxt.firebaseID
  }
  fetch("http://localhost:5000/getbookapi/"+newBook.newIsbn+"/"+newBook.firebaseID, {
    method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newBook),
  })
}

render() {
    return (
      <AuthConsumer>
        {(contxt)=>(
        <div className="bg-white mb-5">

          <a href="/" data-toggle="collapse" data-target="#addbook">
            <p className="child blue title pt-2 pl-2 mb-0">
              <span className="childIcon blue">f </span>Añadir un libro
            </p>
          </a>

          <div id="addbook" className="collapse grey px-2 pb-2">
            <p>Busca en las primera páginas de tu libro el código ISBN e introdúcelo:</p>
            <form method="POST" action="/getbookapi" className="my-3"
                  // onSubmit={this.getBookApi(contxt)}
                  onSubmit={(e)=>{
                    e.preventDefault();
                    this.getBookApi(contxt);
                  }}
                  >
              <div>
                <label className="mb-1 grey mini">ISBN</label>
                <input onChange={this.setAddIsbn} type="text" name="isbn" className="p-1 mb-2 grey width100 border-blue-1"/>
              </div>
                <input type="submit" value="AÑADIR" className="btn btn-blue mt-2"></input>
            </form>
          </div>

        </div>  
        )}
      </AuthConsumer>
     );
    }
  }

export default withRouter(AddBook);