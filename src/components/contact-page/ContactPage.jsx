import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import NavBar from '../navigation/Navigation';
import { contactUs } from '../../util/httpClient';
import './ContactPage.css';

let recaptchaInstance;

class ContactPage extends Component {
  state = {
    contactInfo: '',
    message: '',
    sent: false,
    mobileView: false,
  };

  updateDimensions = () => {
    if (window.innerWidth < 1200) {
      this.setState({ mobileView: true });
    } else {
      this.setState({ mobileView: false });
    }
  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }

  validContactInfo = (contactInfo) => {
    const contactInfoCleaned = String(contactInfo).toLowerCase().trim();
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/i;
    return emailRegEx.test(contactInfoCleaned) || phoneRegEx.test(contactInfoCleaned);
  }

  validMessage = message => message.trim() !== '';

  // called when form is submitted
  handleSubmit = (event) => {
    event.preventDefault();
    const { message, contactInfo } = this.state;

    if (!this.validContactInfo(contactInfo)) {
      this.setState({ error: 'Invalid contact information' });
      return;
    }

    if (!this.validMessage(message)) {
      this.setState({ error: 'Message cannot be blank' });
      return;
    }

    recaptchaInstance.execute();
  }

  // called after captcha has been verified
  verifyCallBack = (reCaptchaResponse) => {
    let { contactInfo, message } = this.state;
    contactInfo = contactInfo.trim();
    message = message.trim();

    contactUs({ contactInfo, message, reCaptchaResponse }).then(() => {
      this.setState({
        contactInfo: '',
        message: '',
        error: '',
        sent: true,
      });
    }).catch((error) => {
      console.dir(error);
      this.setState({ error: 'Something went wrong, please try again later' });
    });
  }

  renderReCaptcha = () => (
    <Recaptcha
      ref={(e) => { recaptchaInstance = e; }}
      sitekey="6LfXphwUAAAAADsLEFWB4qa7R_62ox95GKS0gEiA"
      render="explicit"
      size="invisible"
      verifyCallback={this.verifyCallBack}
    />
  );

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value, error: '' });
  }

  renderFormItem = (contactInfo, message, error, sent) => (sent ? null : (
    <div>
      <span className="contact-page__error">{error}</span>
      <form className="contact-page__form" onSubmit={this.handleSubmit}>
        <div className="contact-page__form-element">
          <label htmlFor="contact-info">
            contact information
            <input type="text" className="contact-page__info" name="contact-info" value={contactInfo} onChange={this.handleChange('contactInfo')} autoCorrect="off" autoCapitalize="none" />
          </label>
        </div>
        <div className="contact-page__form-element">
          <label htmlFor="message">
            message
            <textarea type="text" className="contact-page__message" name="message" value={message} onChange={this.handleChange('message')} />
          </label>
        </div>
        <div className="contact-page__form-element">
          <button className="contact-page__submit" disabled={!contactInfo.trim()} type="submit">send</button>
        </div>
      </form>
    </div>
  ));

  renderSentItem = sent => (sent
    ? (
      <div className="contact-page__success">
        <p>Message sent, thank you.</p>
      </div>
    )
    : null
  )

  render() {
    const { contactInfo, message, error, sent, mobileView } = this.state;
    return (
      <div className="contact-page">
        <NavBar whiteBackground={mobileView} />
        <div className="contact-page__container">
          <div className="contact-page__main">
            { this.renderFormItem(contactInfo, message, error, sent) }
            { this.renderSentItem(sent) }
            { this.renderReCaptcha() }
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
