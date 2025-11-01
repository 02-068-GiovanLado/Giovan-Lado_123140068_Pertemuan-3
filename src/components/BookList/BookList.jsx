// Menampilkan daftar buku
import React, { useState } from 'react';
import BookForm from '../BookForm/BookForm';
import { useBookContext } from '../../context/BookContext';

const BookList = ({ filteredBooks }) => {
  const { dispatch } = useBookContext();
  const [editingBook, setEditingBook] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus buku ini?')) {
      dispatch({ type: 'DELETE_BOOK', payload: id });
    }
  };

  return (
    <div className="book-list">
      {editingBook && (
        <div className="edit-overlay">
          <BookForm bookToEdit={editingBook} onClose={() => setEditingBook(null)} />
        </div>
      )}
      {filteredBooks.length === 0 ? (
        <p>Tidak ada buku ditemukan.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Penulis: {book.author}</p>
              <p>Status: {book.status === 'milik' ? 'Dimiliki' : book.status === 'baca' ? 'Sedang Dibaca' : 'Ingin Dibeli'}</p>
              <button onClick={() => setEditingBook(book)}>Edit</button>
              <button onClick={() => handleDelete(book.id)} style={{ marginLeft: '8px' }}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;