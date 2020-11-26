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
    INSERT INTO books (ownerID, isbn, state, title, authors, publisher, publishedDate, description, pageCount, categories, language, image, textSnippet)
    VALUES
    (
      "${newBook.firebaseID}",
      "${newBook.isbn}",
      "rest",
      "${newBook.title}",
      "${newBook.authors}",
      "${newBook.publisher}",
      "${newBook.publishedDate}",
      "${newBook.description.substr(0,252).concat('',"...")}",
      ${newBook.pageCount},
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
    SELECT * FROM books
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