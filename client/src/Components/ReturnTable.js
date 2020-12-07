import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import MaterialTable from "material-table";
import columnsReturns from '../data/columnsReturns';



class ReturnTable extends Component {
  constructor(props){
    super(props);
    this.state = {
        data:[],
        book:{},
    };
  }

componentDidMount(){
    fetch("http://localhost:5000/getloanhistory/5")
    .then((res) => {return res.json();})
    .then(history => {
      this.setState({data:history})
    })
    .catch(err => {console.log(err);});
}

  render() {
   return(
    <div className="table background shadow">
    <MaterialTable 
          title="Confirmaciones de devolución" 
          columns={columnsReturns}
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
          actions={[
            {
              icon: 'check',
              tooltip: 'Confirmar como devuelto',
              onClick: (e, rowData) => {
                e.preventDefault()
                console.log(rowData.bookID);
                fetch(`http://localhost:5000/updatebookphase/${rowData.bookID}/5/dateRest`)
                .then(()=>{
                  fetch("http://localhost:5000/getloanhistory/5")
                  .then((res) => {return res.json();})
                  .then(history => {
                    this.setState({data:history})
                  })
                  .catch(err => {console.log(err);});
                })
                .catch(err => {console.log(err);});
              }
            }
          ]}
        />
    </div>
      )
    }
}


ReturnTable.contextType=AuthContext;
export default ReturnTable;