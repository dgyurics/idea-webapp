import { contactUs as httpContactUs } from '../api/contact';
import {
  CONTACT_US_FAIL,
  CONTACT_US_PENDING,
  CONTACT_US_SUCCESS, TOGGLE_FORM
} from '../constants/contactTypes';

export const contactUs = (contactInfo, message) => (dispatch) => {
  dispatch({ type: CONTACT_US_PENDING });
  return httpContactUs(
    { contactInfo, message },
    () => dispatch({ type: CONTACT_US_SUCCESS }),
    (error) => dispatch({
      type: CONTACT_US_FAIL,
      payload: error
    })
  );
};

export const toggleForm = () => ({ type: TOGGLE_FORM });
