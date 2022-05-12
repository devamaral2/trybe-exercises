const Books = require('../models/Books');

const getAll = async () => {
  const res = await Books.getAll();
  return res;
}

const findById = async (id) => {
  const book = await Books.findById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o id ${id}`,
      },
    };
  }

  return book;
};

const deleteBook = async (id) => {
  const book = await Books.deleteBook(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o id ${id}`,
      },
    };
  }

  return book;
};




const createBook = async (bookName) => {
  const existingBook = await Books.findByName(bookName);

  if (existingBook) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Este livro já existe',
      },
    };
  }

  // Caso a pessoa autora não exista e, portanto, possa ser criado
  return Books.createBook(bookName);
};



module.exports = {
  getAll,
  findById, 
  createBook,
  deleteBook,
};