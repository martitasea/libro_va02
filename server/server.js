const mariadb = require("mariadb");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes.js");
const port = 5000;
const cors = require("cors");


//------------------------------------------------------------------------------
// BBDD CONECTION MARIADB - LIBROVA
//------------------------------------------------------------------------------
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "",
    connectionLimit: 5,
    database: "librova",
  });


//------------------------------------------------------------------------------
// MIDDLEWARE
//------------------------------------------------------------------------------ 
app.use(bodyParser.urlencoded({ extended: false })); //hace accesible la info
app.use(bodyParser.json()); // parse application/json
app.use(express.static("public")); //esta es la carpeta que mandamos a cliente
app.use(cors())


//------------------------------------------------------------------------------
//ROUTES
//------------------------------------------------------------------------------
//Create user from signup form
app.post("/createuser", routes.createUser);

// Read one book from google API
app.post("/getbookapi/:isbn/:firebaseid", routes.getBookApi);

// Read all my books
app.get("/allmybooks/:firebaseid", routes.getAllMyBooks);

// Read all catalogue
app.get("/allcatalogue/:firebaseid", routes.getAllCatalogue);

// Read one book from catalogue
app.get("/onebookdetail/:isbn", routes.getOneBookDetail);

// Read title from just addedbook
app.get("/getbooktitle/:isbn/:firebaseid", routes.getBookTitle);

// Update book phase from rest to request
app.get("/updatebookphase/:isbn/:firebaseid/:phase", routes.updateBookPhase);

//------------------------------------------------------------------------------
// CREATE USERS TABLE
//------------------------------------------------------------------------------
//   async function asyncFunction(){
//     let conn;
//     try {
//         conn = await pool.getConnection();
//         const rows = await conn.query("SELECT 1 as val");
//         const usersTable = await conn.query(`
//         CREATE TABLE users (
//           firebaseID VARCHAR(30) NOT NULL, 
//           name VARCHAR(300) NOT NULL,
//           tutorName VARCHAR(30) NOT NULL,
//           phone INT(9) NOT NULL,
//           PRIMARY KEY (firebaseID)
//           );
//         `)
//     }
//     catch (err) {
//         throw err;
//       } finally {
//         if (conn) conn.release(); //release to pool
//       }
// }
// asyncFunction();

//------------------------------------------------------------------------------
// CREATE BOOKS TABLE
//------------------------------------------------------------------------------
//   async function asyncFunction(){
//     let conn;
//     try {
//         conn = await pool.getConnection();
//         const rows = await conn.query("SELECT 1 as val");
//         const booksTable = await conn.query(`
//         CREATE TABLE books (
//           bookID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//           ownerID VARCHAR(300) NOT NULL,
//           isbn VARCHAR(20) NOT NULL, 
//           phase VARCHAR (20) NOT NULL,
//           title VARCHAR(100) NOT NULL,
//           authors VARCHAR(100),
//           publisher VARCHAR (30),
//           publishedDate DATE,
//           description VARCHAR(255),
//           pageCount,
//           categories VARCHAR(100),
//           languaje VARCHAR(15),
//           image VARCHAR(255),
//           textSnippet VARCHAR (200)
//           );
//         `)
//     }
//     catch (err) {
//         throw err;
//       } finally {
//         if (conn) conn.release(); //release to pool
//       }
// }
// asyncFunction();

//------------------------------------------------------------------------------
// ALTER BOOKS TABLE - FOREIGN KEY
//------------------------------------------------------------------------------
// async function asyncFunction(){
//   let conn;
//   try {
//       conn = await pool.getConnection();
//       const rows = await conn.query("SELECT 1 as val");
//       const booksTable = await conn.query(`
//       ALTER TABLE books
//       ADD CONSTRAINT FK_ownerID
//         FOREIGN KEY (ownerID) 
//         REFERENCES users (firebaseID);
//       `)
//   }
//   catch (err) {
//       throw err;
//     } finally {
//       if (conn) conn.release(); //release to pool
//     }
// }
// asyncFunction();

//------------------------------------------------------------------------------
// CREATE LOANS TABLE
//------------------------------------------------------------------------------
// async function asyncFunction(){
//   let conn;
//   try {
//       conn = await pool.getConnection();
//       const rows = await conn.query("SELECT 1 as val");
//       const loansTable = await conn.query(`
//       CREATE TABLE loans (
//         loanID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
//         bookID INT NOT NULL,
//         borrowerID VARCHAR(30) NOT NULL,
//         dateIn DATE NOT NULL,
//         dateOut DATE NOT NULL,
//         CONSTRAINT FK_borrowerbook
//             FOREIGN KEY (borrowerID) REFERENCES users (firebaseID),
//         CONSTRAINT FK_bookID
//             FOREIGN KEY (bookID) REFERENCES books (bookID)
//         ); 
//       `)
//   }
//   catch (err) {
//       throw err;
//     } finally {
//       if (conn) conn.release(); //release to pool
//     }
// }
// asyncFunction();

//------------------------------------------------------------------------------
// MIDDLEWARE
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// ROUTES
//------------------------------------------------------------------------------
// app.get("/items/:orderby/:order/:range", rutes.getItems);
// app.get("/manufacturers/:itemid", rutes.getManufacturers);
// app.get("/search/:term", rutes.getItemsTerm);


//------------------------------------------------------------------------------
// DEFINICIÓN DEL PUERTO AL QUE TIENEN QUE ATENDER
//------------------------------------------------------------------------------
app.listen(port, () => {
    console.log("-----------------------------------------------------------------------------------------")
    console.log(
      `TU SERVIDOR LOCAL ESTÁ EN LA SIGUIENTE RUTA http://localhost:${port}`
    );
    console.log("-----------------------------------------------------------------------------------------")
  });
  