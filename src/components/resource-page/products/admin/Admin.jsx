import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddProductForm from './add-product/AddProduct';
import EditProductForm from './edit-product/EditProduct';
import Modal from '../../../modal/Modal';
import SuccessForm from '../../../modal/template/Success';
import {
  toggleAddProductModal,
  toggleEditProductModal,
  toggleSuccessModal,
} from '../../../../actions/product';

const Admin = ({
  visibleAddProduct,
  visibleEditProduct,
  visibleSuccess,
  toggleAddProduct,
  toggleEditProduct,
  toggleSuccess
}) => {

  const onClose = () => {
    if(visibleAddProduct) toggleAddProduct();
    else if(visibleEditProduct) toggleEditProduct();
    else toggleSuccess();
  };

  return (
    <Modal visible={visibleAddProduct || visibleEditProduct || visibleSuccess} onClose={onClose}>
      { visibleSuccess ? <SuccessForm message="success" /> : null }
      { visibleAddProduct ? <AddProductForm /> : null }
      { visibleEditProduct ? <EditProductForm /> : null }
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleAddProduct: () => dispatch(toggleAddProductModal()),
  toggleEditProduct: () => dispatch(toggleEditProductModal()),
  toggleSuccess: () => dispatch(toggleSuccessModal())
});

const mapStateToProps = state => ({
  visibleAddProduct: state.product.showAddProductModal,
  visibleEditProduct: state.product.showEditProductModal,
  visibleSuccess: state.product.showSuccessModal
});

Admin.propTypes = {
  visibleAddProduct: PropTypes.bool.isRequired,
  visibleEditProduct: PropTypes.bool.isRequired,
  visibleSuccess: PropTypes.bool.isRequired,
  toggleAddProduct: PropTypes.func.isRequired,
  toggleEditProduct: PropTypes.func.isRequired,
  toggleSuccess: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
