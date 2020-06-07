import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middleware = [thunk];
if (!PRODUCTION) middleware.push(logger);

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
