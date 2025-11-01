// Halaman utama
import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';
import { useBookContext } from '../../context/BookContext';

const Home = () => {
  const { books } = useBookContext();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filteredBooks = books
    .filter(book => filter === 'all' || book.status === filter)
    .filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="home">
      <h1>Manajemen Buku Pribadi</h1>
      <input
        type="text"
        placeholder="Cari buku..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
      />
      <BookFilter onFilterChange={setFilter} />
      <button onClick={() => setShowForm(true)} style={{ marginTop: '16px' }}>
        Tambah Buku
      </button>

      {showForm && (
        <div className="overlay">
          <BookForm onClose={() => setShowForm(false)} />
        </div>
      )}

      <BookList filteredBooks={filteredBooks} />
    </div>
  );
};

export default Home;