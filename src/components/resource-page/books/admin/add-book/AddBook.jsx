import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addBook } from '../../../../../util/httpClient';

const CreateBook = (props) => {
  const { visible, successCb } = props;
  const defaultRegValues = { title: '', src: '', error: '' };
  const [values, setValues] = useState(defaultRegValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(values)
    .then(() => {
      successCb();
      setValues(defaultRegValues);
    })
    .catch((error) => {
      const code = error.response ? error.response.status : 500;
      if (code === 401) setValues({ ...values, error: 'Unauthorized' });
      else if (code === 404) setValues({ ...values, error: 'Book not found' });
      else setValues({ ...values, error: 'Something went wrong' });
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: '', [name]: value });
  };
  return (
    <div className={visible ? '' : 'hidden'}>
      <span className="modal__error">{values.error}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input type="text" name="title" placeholder="book title" value={values.title} onChange={handleChange} className="modal__input" />
        <input type="text" name="src" placeholder="image url" value={values.src} onChange={handleChange} className="modal__input" />
        <input type="submit" name="create" value="Create" className="modal__submit" disabled={!values.title || !values.src} />
      </form>
    </div>
  );
};

CreateBook.propTypes = {
  visible: PropTypes.bool.isRequired,
  successCb: PropTypes.func.isRequired,
};

export default CreateBook;
