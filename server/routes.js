const { query } = require("express");
const fetch = require("node-fetch");
const bbdd = require("./bbdd.js"); //Own modules BBDD


/* ----------------------------------------------------------------------
CREATE ONE USER FROM SIGNUP FORM
---------------------------------------------------------------------- */
exports.createUser = async (req, res) => {
    let user = await req.body;
      bbdd
        .createUser(user)
        .then((data) =>
        res.status(200).redirect("/catalogue")
        )
        .catch((e) => console.log("ocurrió un error:" + e));
    };


/* ----------------------------------------------------------------------
READ ONE BOOK FROM GOOGLE API
---------------------------------------------------------------------- */
exports.getBookApi = async (req, res) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${req.body.isbn}`)
       .then(function (response) {
        return response.json();
        })
        .then(function (myJson) {
        let newBook={
          firebaseID: req.body.firebaseID,
          isbn:req.body.isbn,
          title:myJson.items[0].volumeInfo.title,
          authors:myJson.items[0].volumeInfo.authors[0],
          publisher:myJson.items[0].volumeInfo.publisher,
          publishedDate:myJson.items[0].volumeInfo.publishedDate,
          description:myJson.items[0].volumeInfo.description,
          categories:myJson.items[0].volumeInfo.categories[0],
          language:myJson.items[0].volumeInfo.language,
          image:myJson.items[0].volumeInfo.imageLinks.thumbnail,
          textSnippet:myJson.items[0].searchInfo.textSnippet
        }
        console.log("Has guardado el libro "+newBook.title);
        bbdd
          .createBook(newBook)
          .then((data) =>
          res.status(200).json(data)
          ) 
          // .catch((e) => console.log("ocurrió un error:" + e));
        }
        // .catch((e) => console.log("ocurrió un error:" + e))
        );
      }
    
/* ----------------------------------------------------------------------
READ ALL BOOKS FROM ONE USER
---------------------------------------------------------------------- */
exports.getAllMyBooks = (req, res) => {
  let firebaseID=req.params.firebaseid;
  bbdd
    .getAllMyBooks(firebaseID)
    .then((data) =>
      res.status(200).json(data)
      )
    .catch((e) => console.log("ocurrió un error:" + e));
};


/* ----------------------------------------------------------------------
READ ALL BOOKS FROM EVERY USER
---------------------------------------------------------------------- */
exports.getAllCatalogue = (req, res) => {
  let firebaseID=req.params.firebaseid;
  bbdd
    .getAllCatalogue(firebaseID)
    .then((data) =>
      res.status(200).json(data)
      )
    .catch((e) => console.log("ocurrió un error:" + e));
};


/* ----------------------------------------------------------------------
READ ONE BOOK FROM CATALOGUE
---------------------------------------------------------------------- */
exports.getOneBookDetail = (req, res) => {
  let isbn=req.params.isbn;
  bbdd
    .getOneBookDetail(isbn)
    .then((data) =>
      res.status(200).json(data)
      )
    .catch((e) => console.log("ocurrió un error:" + e));
};


/* ----------------------------------------------------------------------
READ TITLE FROM JUST ADDED BOOK
---------------------------------------------------------------------- */
exports.getBookTitle = (req, res) => {
  let bookid=req.params.bookid;
  bbdd
    .getBookTitle(bookid)
    .then((data) =>
      res.status(200).json(data)
      )
    .catch((e) => console.log("ocurrió un error:" + e));
};

/* ----------------------------------------------------------------------
UPDATE BOOK PHASE FROM REST TO REQUEST
---------------------------------------------------------------------- */
exports.updateBookPhase = async (req, res) => {
  let bookid=req.params.bookid;
  let phase=req.params.phase;
    bbdd
      .updateBookPhase(bookid, phase)
      .then((data) =>
      res.status(200).json(data)
      )
      .catch((e) => console.log("ocurrió un error:" + e));
  };

  /* ----------------------------------------------------------------------
CREATE LOAN
---------------------------------------------------------------------- */
exports.createLoan = async (req, res) =>{
  let bookid=req.params.bookid;
  let borrowedid=req.params.borrowedid;
  bbdd
  .createLoan(bookid, borrowedid)
  .then((data) =>
  res.status(200).json(data)
  )
  .catch((e) => console.log("ocurrió un error:" + e));  



}