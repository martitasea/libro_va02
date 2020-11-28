const mariadb = require("mariadb");

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

/* ----------------------------------------------------------------------
CREATE ONE USER FROM SIGNUP FORM
---------------------------------------------------------------------- */
exports.createUser = async (user) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(`
    INSERT INTO users (firebaseID, name, tutorName, phone)
    VALUES
    (
      "${user.firebaseID}",
      "${user.name}",
      "${user.tutorName}",
      ${user.phone}
    )
    `);
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};

/* ----------------------------------------------------------------------
CREATE ONE BOOK FORM API GOOGLE
---------------------------------------------------------------------- */
exports.createBook = async (newBook) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(`
    INSERT INTO books (ownerID, isbn, phase, title, authors, publisher, publishedDate, description, categories, language, image, textSnippet)
    VALUES
    (
      "${newBook.firebaseID}",
      "${newBook.isbn}",
      "rest",
      "${newBook.title}",
      "${newBook.authors}",
      "${newBook.publisher}",
      "${newBook.publishedDate}",
      "${newBook.description}",
      "${newBook.categories}",
      "${newBook.language}",
      "${newBook.image}",
      "${newBook.textSnippet.substr(0,252).concat('',"...")}"
    )
    `);
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};

/* ----------------------------------------------------------------------
READ ALL BOOKS FROM ONE USER
---------------------------------------------------------------------- */
exports.getAllMyBooks = async (firebaseID) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(`
    SELECT image,title FROM books
      WHERE ownerID="${firebaseID}"
    `);
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};

/* ----------------------------------------------------------------------
READ ALL BOOKS FROM EVERY USER EXCEPT THE LOGGED ONE
---------------------------------------------------------------------- */
exports.getAllCatalogue = async (firebaseID) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(`
    SELECT image, title, phase, isbn, ownerID FROM books
    WHERE NOT ownerID="${firebaseID}"
    AND phase=1
    ORDER BY phase=1 DESC  
    `);
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};

/* ----------------------------------------------------------------------
READ ONE BOOK FROM CATALOGUE
---------------------------------------------------------------------- */
exports.getOneBookDetail = async (isbn) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(`
    SELECT * FROM books
    WHERE isbn=${isbn} 
    `);
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};
/* ----------------------------------------------------------------------
READ TITLE FROM JUST ADDED BOOK
---------------------------------------------------------------------- */
exports.getBookTitle = async (isbn, firebaseID) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(`
    SELECT title FROM books
    WHERE isbn="${isbn}" 
    AND ownerID="${firebaseID}"
    `);
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};

/* ----------------------------------------------------------------------
UPDATE BOOK PHASE FROM REST TO REQUEST
---------------------------------------------------------------------- */
exports.updateBookPhase = async (isbn, firebaseID, phase) => {
  phase=parseInt(phase)
  if(phase<5){
    phase+=1
  }
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(`
    UPDATE books
    SET phase=${phase}
    WHERE isbn="${isbn}" 
    AND ownerID="${firebaseID}"
    `);
    return res;
  } catch (err) {
    console.log(err);
    return;
  } finally {
    if (conn) conn.release(); 
  }
};