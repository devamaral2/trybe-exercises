const connection = require('./connection');

const getNewBook = (bookData) => {
  const { id, bookName } = bookData;
    return {
      id,
      bookName
    };
  };

const serialize = (bookData) => bookData.map((item) => getNewBook({
  id: item.id,
  bookName: item.book_name
  }));

// Busca todos os autores do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT book_name FROM model_example.books;',
  );
  const serialized = serialize(authors);
  console.log(serialized)
  return serialized;
};

const findById = async (id) => {
  const query = `
    SELECT id, book_name
    FROM model_example.books 
    WHERE id = ?
  `;

  const [bookData] = await connection.execute(query, [id]);

  console.log(bookData);
  if (bookData.length === 0) return null;

  return serialize(bookData)[0];
};

const deleteBook = async (id) => {
  const query = `
    DELETE FROM model_example.books 
    WHERE id = ?
  `;

  const [bookData] = await connection.execute(query, [id]);

  console.log(bookData.affectedRows)
  if (bookData.affectedRows === 0) return null;

  return 'the book has deleted';
};



const createBook = async (bookName) => {
  const [book] = await connection.execute(
    'INSERT INTO model_example.books (book_name) VALUES (?)',
    [bookName],
  );
  return [getNewBook({ id: book.insertId, bookName })];
};

const findByName = async (bookName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  let query = `
    SELECT id, book_name 
    FROM model_example.books
    WHERE book_name = ?
  `;
 // Executamos a consulta e retornamos o resultado
  const [bookData] = await connection.execute(query, [bookName]);

  // Caso nenhum author seja encontrado, devolvemos null
  if (bookData.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return serialize(bookData);
};

module.exports = {
  getAll,
  findById,
  createBook,
  findByName,
  deleteBook
};