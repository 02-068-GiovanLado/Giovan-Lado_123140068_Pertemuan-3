// Form untuk menambah/mengedit buku
import React, { useState } from 'react';
import { useBookContext } from '../../context/BookContext';

const BookForm = ({ bookToEdit = null, onClose }) => {
  const { dispatch } = useBookContext();
  const [title, setTitle] = useState(bookToEdit?.title || '');
  const [author, setAuthor] = useState(bookToEdit?.author || '');
  const [status, setStatus] = useState(bookToEdit?.status || 'milik');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('Judul dan penulis tidak boleh kosong.');
      return;
    }

    const newBook = {
      id: bookToEdit?.id || Date.now(),
      title: title.trim(),
      author: author.trim(),
      status,
    };

    dispatch({ type: bookToEdit ? 'EDIT_BOOK' : 'ADD_BOOK', payload: newBook });
    setError('');
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">{bookToEdit ? 'Update' : 'Tambah'}</button>
      {onClose && <button type="button" onClick={onClose}>Batal</button>}
    </form>
  );
};

export default BookForm;