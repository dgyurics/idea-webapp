import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveBookForm from './remove-book/RemoveBook';
import AddBookForm from './add-book/AddBook';
import Modal from '../../../modal/Modal';
import SuccessForm from '../../../modal/template/Success';
import {
  toggleAddBookModal,
  toggleBookModal,
  toggleRemoveBookModal
} from '../../../../actions/book';

const Admin = ({
  visible,
  visibleAddBook,
  visibleRemoveBook,
  visibleSuccess,
  toggle,
  toggleAddBook,
  toggleRemoveBook
}) => {
  const visibleOptions = !visibleAddBook && !visibleRemoveBook && !visibleSuccess;
  const renderOptions = () => (
    <div className={visibleOptions ? '' : 'hidden'}>
      <button type="button" onClick={() => toggleAddBook()} className="modal__button modal__button--top">add book</button>
      <button type="button" onClick={() => toggleRemoveBook()} className="modal__button">remove book</button>
    </div>
  );

  return (
    <Modal visible={visible} onClose={() => toggle()}>
      { renderOptions() }
      { visibleSuccess ? <SuccessForm message="success" /> : null }
      { visibleRemoveBook ? <RemoveBookForm /> : null }
      { visibleAddBook ? <AddBookForm /> : null }
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleBookModal()),
  toggleRemoveBook: () => dispatch(toggleRemoveBookModal()),
  toggleAddBook: () => dispatch(toggleAddBookModal())
});

const mapStateToProps = state => ({
  visible: state.books.showBookModal,
  visibleAddBook: state.books.showAddBookModal,
  visibleRemoveBook: state.books.showRemoveBookModal,
  visibleSuccess: state.books.showSuccessModal
});

Admin.propTypes = {
  visible: PropTypes.bool.isRequired,
  visibleAddBook: PropTypes.bool.isRequired,
  visibleRemoveBook: PropTypes.bool.isRequired,
  visibleSuccess: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleAddBook: PropTypes.func.isRequired,
  toggleRemoveBook: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
