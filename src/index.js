import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/home';
import BookList from './pages/bookList';
import Book from './pages/book'
import Navbar from './components/navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Nav bar*/}
    {/*Application window*/}
    <div className="bg-white text-black dark:bg-black dark:text-white flex flex-col h-screen">
      <Router>
        <Navbar />
        <Routes>
          {/*Dashboard*/}
          <Route path="/" element={<Home />} />
          {/* Book view*/}
          <Route path="/book/:bookId" element={<Book />} />
          {/* book list */}
          <Route path="/book" element={<BookList />} />
          <Route path="/books" element={<BookList />} />

        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
