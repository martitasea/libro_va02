
import {Link} from "react-router-dom";

export const columns=[
    { 
      title: "Fase", 
      // field: "phase",
      render: rowData => <span>{rowData.phase===3? "Prestar": "Devolver"}</span>
      },
    { 
      title: "ID", field: "loanID",
    },
    {
      title: "", field: "image",
      render: rowData => <img src={rowData.image} style={{width: "50px"}} alt="Imagen del libro"/>
    },
    { 
        title: "ISBN", field: "isbn"
      },
    { 
      title: "Título", field: "title" ,
    }, 
    { 
      title: "Préstamo",field: "dateLoan", defatultSort:"ASC",
      render: rowData => <span>{rowData.dateLoan? rowData.dateLoan.slice(0,10): "-"}</span>
    },
    { 
      title: "Devolución",field: "dateReturn", defatultSort:"ASC",
      render: rowData => <span>{rowData.dateReturn? rowData.dateReturn.slice(0,10): "-"}</span>
    },
    { 
      title: "Fecha límite",
      render: rowData => <span style={{color: "#EE7A71"}}>{rowData.deadLine? rowData.deadLine.slice(0,10): "-"}</span>
    }, 
    { 
      title: "Propietario",
      //  field: "ownerName",
      render: rowData =><Link to="/users"><p style={{color: "#195392"}}>{rowData.ownerName}</p></Link>
    },
    { 
        title: "Lector", field: "borrowerName",
      }    
  ]

export default columns;
 //   render: rowData => <img src={rowData.imageUrl} alt= "tarta" style={{width: 50, borderRadius: '50%'}}/> ,
 