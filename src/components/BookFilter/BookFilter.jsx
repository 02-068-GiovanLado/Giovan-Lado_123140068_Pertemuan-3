// Filter berdasarkan status
import React from 'react';

const BookFilter = ({ onFilterChange }) => {
  return (
    <div className="book-filter">
      <label>
        Filter Status:
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">Semua</option>
          <option value="milik">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </label>
    </div>
  );
};

export default BookFilter;