const Books = require('../services/Books');
const Joi = require('joi');

const getAll = async (_req, res) => {
  
   const books = await Books.getAll();

  res.status(200).json(books);
};
const findById = async (req, res, next) => {
  const { id } = req.params;
  const book = await Books.findById(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (book.error) return next(book.error);

  // Caso não haja nenhum erro, retornamos o book encontrado
  return res.status(200).json(book);
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  const book = await Books.deleteBook(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (book.error) return next(book.error);

  // Caso não haja nenhum erro, retornamos o book encontrado
  return res.status(200).json(book);
};



const createBook = async (req, res, next) => {
  const {
    book_name: bookName,
  } = req.body;

  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    bookName: Joi.string().not().empty().required(),
  }).validate({ bookName }); // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras

  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação da pessoa autora
  const newBooks = await Books.createBook(bookName);

  // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
  if (newBooks.error) return next(newBooks.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // da nova pessoa autora
  return res.status(201).json(newBooks);
};


module.exports = {
  getAll,
  findById,
  createBook,
  deleteBook
};