import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import colorReducer from './reducers/colorsReducer';
import 'typeface-indie-flower';

const rootReducer = combineReducers({
    colors:colorReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
