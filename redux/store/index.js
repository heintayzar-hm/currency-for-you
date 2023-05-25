import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import currenciesReducer from "../slices/currenciesSlice/currenciesSlice";
import currencyReducer from "../slices/currencySlice/currencySlice";
import thunk from "redux-thunk";
// Import logger from 'redux-logger';

const rootReducer = combineReducers({
	currencies: currenciesReducer,
	currency: currencyReducer,
});
const middleWares = [thunk];
const persistConfig = {
	// Root
	key: "root",
	storage: AsyncStorage,
	whitelist: [
		"currencies",
	],
	blacklist: [
		"currency",
	],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: middleWares,
});

const persistor = persistStore(store);

export {store, persistor};
