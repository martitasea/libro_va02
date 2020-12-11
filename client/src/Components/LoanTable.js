import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import MaterialTable from "material-table";
// import columnsLoans from '../data/columnsLoans';
import columnsReturns from '../data/columnsReturns';



class LoanTable extends Component {
  constructor(props){
    super(props);
    this.state = {
        data:[],
    };
  }


componentDidMount(){
  fetch("http://localhost:5000/getloanhistory/3")
  .then((res) => {return res.json();})
  .then(history => {
      console.log(history)
    this.setState({data:history})
  })
  .catch(err => {console.log(err);});
}

  render() {
   return(
    <div className="table background shadow">
 <MaterialTable 
          title="Confirmaciones de préstamo" 
          columns={columnsReturns}
          data={this.state.data}
          options={
          {
            sorting:true,
            exportButton: true,
            rowStyle:{
              height:"10px",
              align:"center" 
            },
            headerStyle:{
              backgroundColor: "#195392",
              color: "white",
              height: "1px",
              margin: "0",
              // padding: "5px",
              align:"center" 
            },
            rowStyle:{
              // backgroundColor: "#195392",
              fontFamily:"arial",
              color: " #195392"
            }

          }
        }
          localization={{
            header:{
              actions: "Confirmar"
            }
          }}
          actions={[
            {
              icon: 'check',
              tooltip: 'Confirmar',
              onClick: (e, rowData) => {
                e.preventDefault()
                console.log(rowData.bookID);
                fetch(`http://localhost:5000/updatebookphase/${rowData.bookID}/3/dateRest`)
                .then(()=>{
                  fetch("http://localhost:5000/getloanhistory/3")
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
        <a href=""></a>
    </div>
      )
    }
}


LoanTable.contextType=AuthContext;
export default LoanTable;