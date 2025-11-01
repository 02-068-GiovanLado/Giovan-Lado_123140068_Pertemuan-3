// Context untuk manajemen state global buku
import React, { createContext, useContext, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookContext = createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'EDIT_BOOK':
      return state.map(book => (book.id === action.payload.id ? action.payload : book));
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage('books', []);
  const [state, dispatch] = useReducer(bookReducer, books);

  // Sinkronisasi perubahan ke localStorage
  React.useEffect(() => {
    setBooks(state);
  }, [state, setBooks]);

  return (
    <BookContext.Provider value={{ books: state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};