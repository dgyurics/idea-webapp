import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editProduct } from '../../../../../actions/product';

const EditProduct = ({ product, editProduct, error }) => {
  const initState = {
    ...product,
    errorMsg: ''
  };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(state, product.id);
  };

  const isSubmitDisabled = !state.name || !state.description || !state.imageUri || !state.imageAlt

  return (
    <div>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input type="text" name="name" placeholder="name" value={state.name} onChange={handleChange} className="modal__input" />
        <input type="text" name="description" placeholder="description" value={state.description} onChange={handleChange} className="modal__input" />
        <input type="text" name="imageUri" placeholder="image uri" value={state.imageUri} onChange={handleChange} className="modal__input" />
        <input type="text" name="imageAlt" placeholder="image alt" value={state.imageAlt} onChange={handleChange} className="modal__input" />
        <input type="text" name="imageStyle" placeholder="additional styling css" value={state.imageStyle} onChange={handleChange} className="modal__input" />
        <input type="submit" name="create" value="Update" className="modal__submit" disabled={isSubmitDisabled} />
      </form>
    </div>
  );
};

EditProduct.propTypes = {
  editProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imageUri: PropTypes.string,
    imageAlt: PropTypes.string,
    imageStyle: PropTypes.string
  }).isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

const mapStateToProps = state => ({
  product: state.product.products[state.product.editProductIndex],
  error: state.product.error
});

const mapDispatchToProps = dispatch => ({
  editProduct: (product, productId) => dispatch(editProduct(product, productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct);
