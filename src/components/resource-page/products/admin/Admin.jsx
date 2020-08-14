import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddProductForm from './add-product/AddProduct';
import Modal from '../../../modal/Modal';
import SuccessForm from '../../../modal/template/Success';
import {
  toggleAddProductModal,
  toggleProductModal,
} from '../../../../actions/product';

const Admin = ({
  visible,
  visibleAddBook,
  visibleSuccess,
  toggle,
  toggleAddBook
}) => {
  const visibleOptions = !visibleAddBook && !visibleSuccess;
  const renderOptions = () => (
    <div className={visibleOptions ? '' : 'hidden'}>
      <button type="button" onClick={() => toggleAddBook()} className="modal__button modal__button--top">add product</button>
    </div>
  );

  return (
    <Modal visible={visible} onClose={() => toggle()}>
      { renderOptions() }
      { visibleSuccess ? <SuccessForm message="success" /> : null }
      { visibleAddBook ? <AddProductForm /> : null }
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleProductModal()),
  toggleAddBook: () => dispatch(toggleAddProductModal())
});

const mapStateToProps = state => ({
  visible: state.product.showBookModal,
  visibleAddBook: state.product.showAddBookModal,
  visibleSuccess: state.product.showSuccessModal
});

Admin.propTypes = {
  visible: PropTypes.bool.isRequired,
  visibleAddBook: PropTypes.bool.isRequired,
  visibleSuccess: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleAddBook: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
