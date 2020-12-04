
export const columns=[
    { 
      title: "ID", 
      field: "loanID",
      headerStyle: {backgroundColor: "#195392", color: "white", height: "30px", margin: "0", padding: "5px", width:"100"},
      cellStyle: {width: 10, maxWidth: 500},
    },
    {
      title: "",
      field: "image",
      render: rowData => <img src={rowData.image} style={{width: 50}}/>,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px",     
    }
    },
    { 
      title: "ISBN", 
      field: "isbn",
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px",   
    }
    },
    { 
      title: "Título",
      field: "title" ,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    }, 
    { 
      title: "Request",
      field: "dateRequest",
      render: rowData => <span>{rowData.dateRequest.slice(0,10)}</span>,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    }, 
    { 
      title: "Loan",
      field: "dateLoan",
      render: rowData => <span>{rowData.dateLoan.slice(0,10)}</span>,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    }, 
    { 
      title: "Reading",
      field: "dateReading",
      // render: rowData => <span>{rowData.dateReading.slice(0,10)}</span>,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    },
    { 
      title: "Return",
      field: "dateReturn",
      render: rowData => <span>{rowData.dateReturn.slice(0,10)}</span>,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    },  
    { 
      title: "Rest",
      field: "dateRest",
      // render: rowData => <span>{rowData.dateRest.slice(0,10)}</span>,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    },  
    { 
      title: "Deadline",
      field: "DeadLine" ,
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    }, 
    { 
      title: "Propietario", 
      field: "ownerName",
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    },
    { 
        title: "Prestado", 
        field: "borrowerName",
        headerStyle: {
          backgroundColor: "#195392",
          color: "white",
          height: "1px",
          margin: "0",
          padding: "5px"       
      }
      },
    { 
      title: "Email", 
      field: "email",
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    },
    { 
      title: "Teléfono", 
      field: "borrowerPhone",
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    },
    { 
      title: "Fase", 
      field: "phase",
      headerStyle: {
        backgroundColor: "#195392",
        color: "white",
        height: "1px",
        margin: "0",
        padding: "5px"       
    }
    }
  ]

export default columns;
 //   render: rowData => <img src={rowData.imageUrl} alt= "tarta" style={{width: 50, borderRadius: '50%'}}/> ,
 