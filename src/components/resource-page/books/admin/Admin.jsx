import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RemoveBookForm from './remove-book/RemoveBook';
import AddBookForm from './add-book/AddBook';
import { BookContext } from '../../../context/BookContext';
import Modal from '../../../modal/Modal';
import SuccessForm from '../../../modal/template/Success';

/* Component for adding and removing books */
const Admin = (props) => {
  const { visible, onClose } = props;
  const { getBooks } = useContext(BookContext);
  const initState = {
    removeBook: false,
    addBook: false,
    success: false,
  };
  const [viewSwitch, setViewSwitch] = useState(initState);
  const closeModal = () => {
    setViewSwitch(initState);
    onClose();
  };
  const MODAL_CLOSE_TIMER = 2500;
  const successCb = () => {
    getBooks();
    setViewSwitch({ ...initState, success: true });
    setTimeout(() => closeModal(), MODAL_CLOSE_TIMER);
  };
  const renderOptions = () => (
    <div className={viewSwitch.removeBook || viewSwitch.addBook || viewSwitch.success ? 'hidden' : ''}>
      <button type="button" onClick={() => setViewSwitch({ ...viewSwitch, addBook: true })} className="modal__button modal__button--top">add book</button>
      <button type="button" onClick={() => setViewSwitch({ ...viewSwitch, removeBook: true })} className="modal__button">remove book</button>
    </div>
  );
  return (
    <Modal visible={visible} onClose={closeModal}>
      { renderOptions() }
      <SuccessForm visible={viewSwitch.success} message="success" />
      <RemoveBookForm visible={viewSwitch.removeBook} successCb={successCb} />
      <AddBookForm visible={viewSwitch.addBook} successCb={successCb} />
    </Modal>
  );
};

Admin.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Admin;
