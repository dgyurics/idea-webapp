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

/* Component for adding and removing books */
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
      <SuccessForm visible={visibleSuccess} message="success" />
      <RemoveBookForm visible={visibleRemoveBook} successCb={() => {}} />
      <AddBookForm visible={visibleAddBook} successCb={() => {}} />
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleBookModal()),
  toggleRemoveBook: () => dispatch(toggleRemoveBookModal()),
  toggleAddBook: () => dispatch(toggleAddBookModal())
});

const mapStateToProps = state => ({
  visible: state.showBookModal,
  visibleAddBook: state.showAddBookModal,
  visibleRemoveBook: state.showRemoveBookModal,
  visibleSuccess: state.showSuccessModal
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
