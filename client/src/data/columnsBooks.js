
import {Link} from "react-router-dom";

export const columns=[
    { 
      title: "Fase", 
      // field: "phase",
      render: rowData => <span>{rowData.phase===1? "Devuelto": 
        (rowData.phase===2? "Pedido" : 
            (rowData.phase===3? "Prestado":
                (rowData.phase===4? "Leyendo":
                    (rowData.phase===5? "Solicita devolver": "Pendiente")))
                )}</span>
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
        title: "Petición",field: "dateRequest", defatultSort:"ASC",
        render: rowData => <span>{rowData.dateRequest? rowData.dateRequest.slice(0,10): "-"}</span>
    },
    {
      title: "Préstamo",field: "dateLoan", defatultSort:"ASC",
      render: rowData => <span>{rowData.dateLoan? rowData.dateLoan.slice(0,10): "-"}</span>
    },
    { 
      title: "Leyendo",field: "dateReading", defatultSort:"ASC",
      render: rowData => <span>{rowData.dateReading? rowData.dateReading.slice(0,10): "-"}</span>
    },
    { 
        title: "Solicitud",field: "datePending", defatultSort:"ASC",
        render: rowData => <span>{rowData.datePending? rowData.datePending.slice(0,10): "-"}</span>
      },
    { 
        title: "Devolución",field: "dateReturn", defatultSort:"ASC",
        render: rowData => <span>{rowData.dateReturn? rowData.dateReturn.slice(0,10): "-"}</span>
    },
    { 
        title: "Reposo",field: "dateRest", defatultSort:"ASC",
        render: rowData => <span>{rowData.dateRest? rowData.dateRest.slice(0,10): "-"}</span>
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
 