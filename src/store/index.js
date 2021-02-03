import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers/';

// CREAS EL STORE Y LLAMAS AL CREATESTORE DE REDUX, 
// DESPUES HACES EL STORE.DISPATCH CON LA ACTION(TYPE ("NOMBRE DE ACCION QUE HACES") Y VALUE("ACCION EN SI"))

const initialState={
    city: 'Buenos Aires, AR'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// LE PASAMOS 1ER PARAMETRO: UN REDUCER,(QUE SEPARAMOS DEL STORE Y LO HACEMOS EN OTRA CARPETA)
// 2DO PARAMETRO UN ESTADO INICIAL (POR AHORA HARDCODEADO)
// 3ER PARAMETRO ES PARA VER TODO EN EL PLUGIN EN CHROME
export const store = createStore(reducers , initialState, composeEnhancers(applyMiddleware(thunk))); 
