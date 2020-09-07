import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProduct } from '../../../../../actions/product';

const CreateProduct = ({ addProduct, error }) => {
  const initState = {
    name: '',
    priority: 9,
    description: '',
    imageUri: '',
    imageAlt: '',
    imageStyle: '',
    errorMsg: ''
  };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  const isSubmitDisabled = !state.name || !state.description || !state.imageUri || !state.imageAlt

  return (
    <div>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input type="text" name="name" placeholder="name" value={state.name} onChange={handleChange} className="modal__input" />
        <input type="text" name="priority" placeholder="priority" value={state.priority} onChange={handleChange} className="modal__input" />
        <input type="text" name="description" placeholder="description" value={state.description} onChange={handleChange} className="modal__input" />
        <input type="text" name="imageUri" placeholder="image uri" value={state.imageUri} onChange={handleChange} className="modal__input" />
        <input type="text" name="imageAlt" placeholder="image alt" value={state.imageAlt} onChange={handleChange} className="modal__input" />
        <input type="text" name="imageStyle" placeholder="additional styling css" value={state.imageStyle} onChange={handleChange} className="modal__input" />
        <input type="submit" name="create" value="Create" className="modal__submit" disabled={isSubmitDisabled} />
      </form>
    </div>
  );
};

CreateProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

const mapStateToProps = state => ({
  error: state.product.error
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch(addProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProduct);
