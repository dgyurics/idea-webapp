import { contactUs as httpContactUs } from '../util/httpClient';

export const contactUs = (data, cbSuccess, cbFail) => {
  httpContactUs(data)
    .then(res => cbSuccess(res))
    .catch(error => cbFail(error));
};
