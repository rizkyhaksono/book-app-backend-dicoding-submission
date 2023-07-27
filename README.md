# Bookshelf API Backend Dicoding Submission

Ini adalah submission dari dicoding untuk kelas Belajar Membuat Aplikasi Back-End untuk Pemula. Submission ini berupa API untuk aplikasi Bookshelf.

Cara menjalankan API ini:

-   Clone repository ini.
-   Jalankan perintah `npm install` untuk menginstall semua dependency.
-   Jalankan perintah `npm run start-dev` untuk menjalankan server.
-   Buka `http://localhost:9000/` untuk mengakses server.

## Endpoint

-   GET /books
-   GET /books/{bookId}
-   POST /books
-   PUT /books/{bookId}
-   DELETE /books/{bookId}

## Request Body

-   POST /books

```
{
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 25,
    "reading": true
}
```
