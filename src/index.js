import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/index.css';
import App from './App';
import { store } from './store';

ReactDOM.render(
    //PROVIDER : PROVEE A LOS COMPONENTES(APP EN ESTE CASO) EL STORE 
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
