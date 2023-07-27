const { nanoid } = require('nanoid');
const books = require('./books');

const addBooksHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newBook = {
        title, tags, body, id, createdAt, updatedAt,
    }

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            }
        });
        response.code(201);
        return response;
    }

    const response = h.request({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
}

const getAllBooksHandler = () => ({
    status: 'success',
    data: {
        books,
    },
});

const getBookByIdHandler = (request, h) => {

}

const editBookByIdHandler = (request, h) => {

}

const deleteBookByIdHandler = (request, h) => {

}

module.exports = { addBooksHandler, 
    getAllBooksHandler, 
    getBookByIdHandler, 
    editBookByIdHandler, 
    deleteBookByIdHandler };