
export const columns=[
    { 
      title: "Fase", field: "phase",
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
      title: "Fecha límite",
      render: rowData => <span style={{color: "red"}}>{rowData.deadLine? rowData.deadLine.slice(0,10): "-"}</span>
    }, 
    { 
      title: "Propietario", field: "ownerName",
    },
    { 
        title: "Lector", field: "borrowerName",
      }    
  ]

export default columns;
 //   render: rowData => <img src={rowData.imageUrl} alt= "tarta" style={{width: 50, borderRadius: '50%'}}/> ,
 