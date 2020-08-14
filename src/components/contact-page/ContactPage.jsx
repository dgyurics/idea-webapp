import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../navigation/Navigation';
import { contactUs, toggleForm } from '../../actions/contact';
import './ContactPage.css';

const ContactPage = ({ contactUs, toggleForm, showForm, showSuccess, error }) => {
  const initState = { contactInfo: '', message: '', errorMsg: '' };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const validContactInfo = (contactInfo) => {
    const contactInfoCleaned = String(contactInfo).toLowerCase().trim();
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/i;
    return emailRegEx.test(contactInfoCleaned) || phoneRegEx.test(contactInfoCleaned);
  };

  const isValidMessage = message => message.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validContactInfo(state.contactInfo))
      setState({ ...state, errorMsg: 'Invalid contact information' });
    else if (!isValidMessage(state.message))
      setState({ ...state, errorMsg: 'Message cannot be blank' });
    else
      contactUs(state.contactInfo, state.message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  const renderForm = () => (
    <div className="contact-page__form--margin">
      <span className="contact-page__error">{state.errorMsg}</span>
      <form className="contact-page__form" onSubmit={handleSubmit}>
        <div className="contact-page__form-element">
          <label htmlFor="contact-info">
            contact information
            <input type="text" className="contact-page__info" name="contactInfo" value={state.contactInfo} onChange={handleChange} autoCorrect="off" autoCapitalize="none" />
          </label>
        </div>
        <div className="contact-page__form-element">
          <label htmlFor="message">
            message
            <textarea type="text" className="contact-page__message" name="message" value={state.message} onChange={handleChange} />
          </label>
        </div>
        <div className="contact-page__form-element">
          <button className="contact-page__submit" disabled={!state.contactInfo.trim()} type="submit">send</button>
        </div>
      </form>
    </div>
  );

  const renderAbout = () => (
    <div>
      <p>
        Lasting relationships, travel, experiences, knowledge, and health are all underrated in this day and age.
        Stuff won't make you happy. Okay, yeah, we need stuff, but if you're like me, you live
        in a world that tells you all of your problems can be solved with the right product.
        After realizing this is not true, I decided to cut back on my spending to focus on building
        a better lifestyle.
      </p>
      <p>
        Granted things like clothes, shampoo, and cookware are necessary. If you're anything like me, you really just want the basics.
        Something that gets the job done, lasts forever, and looks good. That's why I created this website. To help people
        like you sort through the distractions out there.
      </p>
      <p>
        <i className="contact-page__disclaimer">Disclaimer. I am not affiliated with nor do I sell any of the products listed.</i>
      </p>
      { showForm || showSuccess ? null : <button type="button" onClick={() => toggleForm()} className="contact-page__submit">say hello</button> }
    </div>
  );

  const renderSuccess = () => (
      <div>
        <p>Message sent, thank you.</p>
      </div>
  );

  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-page__container">
        <div className="contact-page__main">
          { renderAbout() }
          { showForm ? renderForm() : null }
          { showSuccess ? renderSuccess() : null }
        </div>
      </div>
    </div>
  );
};

ContactPage.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  contactUs: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  showSuccess: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

const mapStateToProps = state => ({
  showForm: state.contact.showForm,
  showSuccess: state.contact.showSuccess,
  error: state.contact.error
});

const mapDispatchToProps = dispatch => ({
  toggleForm: () => dispatch(toggleForm()),
  contactUs: (contactInfo, msg) => dispatch(contactUs(contactInfo, msg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage);
