import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import MaterialTable from "material-table";
import columnsUsers from '../data/columnsUsers';



class ListUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
        data:[],
    };
  }


componentDidMount(){
  fetch("http://localhost:5000/getallusers")
  .then((res) => {return res.json();})
  .then(users => {
      console.log(users)
    this.setState({data:users})
  })
  .catch(err => {console.log(err);});
}

  render() {
   return(
    <div className="table background shadow">
 <MaterialTable 
          title="Confirmaciones de préstamo" 
          columns={columnsUsers}
          data={this.state.data}
          options={
          {
            sorting:true,
            exportButton: true,
            rowStyle:{
              height:"10px",
              padding: "5px",
              align:"center" 
            },
            headerStyle:{
              backgroundColor: "#195392",
              color: "white",
              height: "1px",
              margin: "0",
              padding: "5px",
              align:"center" 
            }

          }
        }
        />
    </div>
      )
    }
}


ListUsers.contextType=AuthContext;
export default ListUsers;