const Book = require("../model/book.model");

async function getBook(req,res){
    try {
        const book = await Book.find();
        return res.status(200).json(book);
    } catch (error) {
        console.log("error on book.controller",error);
        return res.status(500).json(error);
    };
}


module.exports = {
    getBook
}