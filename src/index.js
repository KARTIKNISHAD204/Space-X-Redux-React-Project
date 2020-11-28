import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from "redux-saga";
import rootsaga from './Saga/rootSaga';
import rootreducer from './Reducer/rootReducer';


const sagaMiddleware = createSagaMiddleware();
const composeenhancer = compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootreducer,composeenhancer);
sagaMiddleware.run(rootsaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
