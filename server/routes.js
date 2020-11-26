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
        // .then((data) =>
        res.status(200).redirect("/catalogue")
        // )
        // .catch((e) => console.log("ocurrió un error:" + e));
    };


/* ----------------------------------------------------------------------
READ ONE BOOK FROM GOOGLE API
---------------------------------------------------------------------- */
exports.getBookApi = async (req, res) => {
    // let isbn = req.params.isbn;
    console.log("ID de usuario "+req.body.firebaseID)
    console.log("ISBN "+req.body.isbn)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${req.body.isbn}`)
       .then(function (response) {
        return response.json();
        })
        .then(function (myJson) {
        // console.log(myJson.items[0].volumeInfo.title)   
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
        .createBook(newBook);
      res.status(200).redirect("/catalogue")  
        });
      }
    
/* ----------------------------------------------------------------------
READ ALL BOOKS FROM ONE USER
---------------------------------------------------------------------- */
exports.getAllMyBooks = (req, res) => {
  let firebaseID=req.params.firebaseid;
  bbdd
    .getAllMyBooks(firebaseID)
    .then((data) =>
      res.status(200).send(data)
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
      res.status(200).send(data)
      )
    .catch((e) => console.log("ocurrió un error:" + e));
};


/* ----------------------------------------------------------------------
READ ONE BOOK FROM CATALOGUE
---------------------------------------------------------------------- */
exports.getOneBookDetail = (req, res) => {
  let isbn=req.params.isbn;
  console.log("comprobación isbn")
  console.log(isbn)
  bbdd
    .getOneBookDetail(isbn)
    .then((data) =>
      res.status(200).send(data)
      )
    .catch((e) => console.log("ocurrió un error:" + e));
};