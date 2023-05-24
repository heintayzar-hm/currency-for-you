import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
	currency: require('../slices/currencySlice/currencySlice').default,
});
const middleWares = [logger, thunk];

const store = configureStore({
	reducer: rootReducer,
	middleware: middleWares,
});

const persistor = persistStore(store);

export {store, persistor};
