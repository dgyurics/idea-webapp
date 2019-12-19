import React, { useState, useContext } from 'react';
import { Icon } from 'react-icons-kit';
import { settings } from 'react-icons-kit/feather/settings';
import { UserContext } from '../../context/UserContext';
import { BookContext } from '../../context/BookContext';
import Admin from './admin/Admin';
import './Books.css';

const Books = () => {
  const { books } = useContext(BookContext);
  const { isAdmin } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const renderBooks = () => books.map(book => (
    <div className="book-container" key={book.id}>
      <img className="book" src={book.src} alt={book.alt} />
    </div>
  ));

  return (
    <div className="books-container">
      { isAdmin ? <Icon className="books-icon" onClick={toggleModal} size="2rem" icon={settings} /> : null }
      <div className="books-container__main">
        { renderBooks() }
      </div>
      <Admin visible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Books;
