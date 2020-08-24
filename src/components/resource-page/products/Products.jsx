import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { moreVertical } from 'react-icons-kit/feather';
import {
  getProducts,
  removeProduct,
  toggleProductSelection,
  toggleAddProductModal,
  toggleEditProductModal
} from '../../../actions/product';
import Modal from '../../modal/Modal';
import DropDown from '../../drop-down/DropDown';
import './Products.css';
import Admin from './admin/Admin';

const Products = ({
  isAdmin,
  products,
  getProducts,
  removeProduct,
  toggleAddProductModal,
  toggleEditProductModal,
  toggleProductSelection,
  selectedProductIndex
}) => {
  useEffect(() => {
    getProducts();
  }, []);

  const renderAdditionalOptions = (productId, idx) => {
    if (!isAdmin) return null;
    const actions = [
      { label: "edit", action: () => toggleEditProductModal(idx) },
      { label: "remove", action: () => removeProduct(productId) }
    ];
    return <DropDown actions={actions} />
  };

  const renderProducts = () => products.map((product, idx) => (
    <div className="product-container" key={idx}>
      <div className="product-image-container" onClick={() => toggleProductSelection(idx)}>
        <img css={product.imageStyle} className="product" src={product.imageUri} alt={product.imageAlt} />
      </div>
      { renderAdditionalOptions(product.id, idx) }
    </div>
  ));

  return (
    <div className="products-container">
      <div className="products-container__main">
        { renderProducts() }
        {isAdmin ? <div className="products__admin__icon" onClick={() => toggleAddProductModal()}>
          <Icon icon={moreVertical} />
        </div> : null}
      </div>
      <Admin />
      <Modal visible={selectedProductIndex >= 0 ? true : false} onClose={() => toggleProductSelection()}>
        <p dangerouslySetInnerHTML={{__html: selectedProductIndex >= 0 ? products[selectedProductIndex].description : null}} />
      </Modal>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  removeProduct: (productId) => dispatch(removeProduct(productId)),
  toggleAddProductModal: () => dispatch(toggleAddProductModal()),
  toggleEditProductModal: (idx) => dispatch(toggleEditProductModal(idx)),
  toggleProductSelection: (idx) => dispatch(toggleProductSelection(idx))
});

const mapStateToProps = state => ({
  products: state.product.products,
  isAdmin: state.auth.user.admin,
  selectedProductIndex: state.product.selectedProductIndex
});

Products.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedProductIndex: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  toggleAddProductModal: PropTypes.func.isRequired,
  toggleEditProductModal: PropTypes.func.isRequired,
  toggleProductSelection: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
