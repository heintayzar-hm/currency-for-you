import {createSlice} from "@reduxjs/toolkit";
import { CURRENCIES, SLICES } from "../../../constants";

const currencySlice = createSlice({
	name: SLICES.CURRENCY,
	initialState: {
		firstCurrency: {
			name: CURRENCIES.FIRST_CURRENCY,
			id: 1,
			value: 0,
			type: CURRENCIES.FIRST_CURRENCY_TYPE,
		},
		secondCurrency: {
			name: CURRENCIES.SECOND_CURRENCY,
			value: 0,
			id: 2,
			type: CURRENCIES.SECOND_CURRENCY_TYPE,
		},
		currencyExchange: {
			name: CURRENCIES.EXCHANGE_CURRENCY,
			value: 0,
			id: 3,
			type: CURRENCIES.EXCHANGE_CURRENCY_TYPE,
			placeholder: CURRENCIES.EXCHANGES_PLACEHOLDER,
		},
	},
	reducers: {
		changeCurrency(state, action) {
			const {name, value, amount} = action.payload;
			if (name === CURRENCIES.FIRST_CURRENCY) {
				return {
					...state,
					firstCurrency: {
						...state.firstCurrency,
						value,
					},
					secondCurrency: {
						...state.secondCurrency,
						value: amount,
					},
				};
			}

			return {
				...state,
				firstCurrency: {
					...state.firstCurrency,
					value: amount,
				},
				secondCurrency: {
					...state.secondCurrency,
					value,
				},
			};
		},
		changeCurrencyType(state, action) {
			const {name, type} = action.payload;
			if (name === CURRENCIES.FIRST_CURRENCY) {
				return {
					...state,
					firstCurrency: {
						...state.firstCurrency,
						type,
					},
				};
			}

			if (name === CURRENCIES.SECOND_CURRENCY) {
				return {
					...state,
					secondCurrency: {
						...state.secondCurrency,
						type,
					},
				};
			}

			return {
				...state,
				currencyExchange: {
					...state.currencyExchange,
					type: type,
				},
			};
		},
		changeCurrencyExchange(state, action) {
			const { val } = action.payload;
			return {
				...state,
				currencyExchange: {
					...state.currencyExchange,
					value: val,
				},
			};
		}
	},
});

export const {changeCurrencyType, changeCurrency, changeCurrencyExchange} = currencySlice.actions;
export default currencySlice.reducer;
