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
        res.status(200).json(data)
        )
        .catch((e) => console.log("ocurrió un error:" + e));
    };

/* ----------------------------------------------------------------------
GET USER NAME
---------------------------------------------------------------------- */
exports.getUserName = async (req, res) => {
  let firebaseID = req.params.firebaseid;
    bbdd
      .getUserName(firebaseID)
      .then((data) =>
      res.status(200).json(data)
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
          let authors
          if(myJson.items[0].volumeInfo.authors){
            authors=myJson.items[0].volumeInfo.authors[0]
          }else{
            authors="Sin autor"
          }
          let publisher
          if(myJson.items[0].volumeInfo.publisher){
            publisher=myJson.items[0].volumeInfo.publisher
          }else{
            publisher="Sin editorial"
          }
          let publishedDate
          if(myJson.items[0].volumeInfo.publishedDate){
            publishedDate=myJson.items[0].volumeInfo.publishedDate
          }else{
            publishedDate="Sin fecha"
          }
          let description
          if(myJson.items[0].volumeInfo.description){
            description=myJson.items[0].volumeInfo.description.replace(/'/g,"")
          }else{
            description="Sin descripción"
          }
          let categories
          if(myJson.items[0].volumeInfo.categories){
            categories=myJson.items[0].volumeInfo.categories[0]
          }else{
            categories="Categoría desconocida"
          }
          let language
          if(myJson.items[0].volumeInfo.language){
            language=myJson.items[0].volumeInfo.language
          }else{
            language="Idioma desconocido"
          }
          let image
          if(myJson.items[0].volumeInfo.imageLinks){
            image=myJson.items[0].volumeInfo.imageLinks.thumbnail
          }else{
            image="./media/sinportada.jpg"
          }
          let textSnippet
          if(myJson.items[0].searchInfo.textSnippet){
            textSnippet=myJson.items[0].searchInfo.textSnippet.replace(/'/g,"")
          }else{
            textSnippet="Sin reseña de autor"
          }

          
        let newBook={
          firebaseID: req.body.firebaseID,
          isbn:req.body.isbn,
          title:myJson.items[0].volumeInfo.title,
          authors:authors,
          // authors:myJson.items[0].volumeInfo.authors[0],
          publisher:publisher,
          // publisher:myJson.items[0].volumeInfo.publisher,
          publishedDate:publishedDate,
          // publishedDate:myJson.items[0].volumeInfo.publishedDate,
          description:description,
          // description:myJson.items[0].volumeInfo.description,
          categories:categories,
          // categories:myJson.items[0].volumeInfo.categories[0],
          language:language,
          // language:myJson.items[0].volumeInfo.language,
          image:image,
          // image:myJson.items[0].volumeInfo.imageLinks.thumbnail,
          textSnippet:textSnippet
          // textSnippet:myJson.items[0].searchInfo.textSnippet,
        }
        bbdd
          .createBook(newBook)
          .then((data) =>
          res.status(200).json(data)
          ) 
          .catch((e) => console.log("ocurrió un error:" + e));
        }
        // .catch((e) => {
        //   console.log("ocurrió un error:" + e)})
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
exports.getAddedBookTitle = (req, res) => {
  let isbn=req.params.isbn;
  let firebaseid=req.params.firebaseid;
  bbdd
    .getAddedBookTitle(isbn, firebaseid)
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
  let date=req.params.date;
    bbdd
      .updateBookPhase(bookid, phase, date)
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
  let borrowerid=req.params.borrowerid;
  bbdd
  .createLoan(bookid, borrowerid)
  .then((data) =>
  res.status(200).json(data)
  )
  .catch((e) => console.log("ocurrió un error:" + e));  
}

/* ----------------------------------------------------------------------
GET ASKED BOOKS
---------------------------------------------------------------------- */
exports.getAskedBooks = async (req, res) => {
  let firebaseid=req.params.firebaseid;
  bbdd
  .getAskedBooks(firebaseid)
  .then((data) =>
  res.status(200).json(data)
  )
}

/* ----------------------------------------------------------------------
GET READING BOOKS
---------------------------------------------------------------------- */
exports.getReadingBook = async (req, res) => {
  let firebaseid=req.params.firebaseid;
  bbdd
  .getReadingBook(firebaseid)
  .then((data) =>
  res.status(200).json(data)
  )
}

/* ----------------------------------------------------------------------
READ BOOK TITLE
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
DELETE A BOOK
---------------------------------------------------------------------- */
exports.deleteBook = async (req, res) => {
  let book = await req.body;
  bbdd
    .deleteBook(book)
    .then((data) =>
      res.status(200).json(data)
      )
    .catch((e) => console.log("ocurrió un error:" + e));
};

/* ----------------------------------------------------------------------
GET LOAN HISTORY
---------------------------------------------------------------------- */
exports.getLoanHistory = async (req, res) => {
  let phase = await req.params.phase;
  bbdd
    .getLoanHistory(phase)
    .then((data) =>
      res.status(200).json(data)
      )
      .catch((e) => console.log("ocurrió un error:" + e));
  };

/* ----------------------------------------------------------------------
GET ALL USERS
---------------------------------------------------------------------- */
exports.getAllUsers = async (req, res) => {
  bbdd
    .getAllUsers()
    .then((data) =>
      res.status(200).json(data)
      )
      .catch((e) => console.log("ocurrió un error:" + e));
  };

/* ----------------------------------------------------------------------
GET NUMBER BOOKS
---------------------------------------------------------------------- */
exports.getNumberBooks = async (req, res) => {
  bbdd
    .getNumberBooks()
    .then((data) =>
      res.status(200).json(data)
      )
      .catch((e) => console.log("ocurrió un error:" + e));
  };