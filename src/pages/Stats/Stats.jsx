import React from 'react';
import { useBookContext } from '../../context/BookContext';
import { useBookStats } from '../../hooks/useBookStats';

const Stats = () => {
  const { books } = useBookContext();
  const stats = useBookStats(books);

  return (
    <div className="stats">
      <h1>Statistik Buku</h1>
      <p>Total Buku: {stats.total}</p>
      <p>Dimiliki: {stats.owned}</p>
      <p>Sedang Dibaca: {stats.reading}</p>
      <p>Ingin Dibeli: {stats.wishlist}</p>
    </div>
  );
};

export default Stats;