import {API_URL, API_KEY} from "@env";
export const SCREENS = {
	CURRENCIES: "Convert Two Currencies",
	SPLASH: "Splash",
	CURRENCIES_LIST: "Currencies List",
	ALL_EXCHANGE_RATES: "All Exchange Rates",
};

export const API = {
	URL: API_URL || "http://apilayer.net/api/live",
	SECRET_KEY: API_KEY,
	END_POINTS: {
		LATEST: "/latest",
		LIVE: "/live",
	},
	MINUTES_TO_REFRESH: 30,
};

export const APP = {
	NAME: "Currency For You",
	SEARCH_BAR_PLACEHOLDER: "Search for a currency",
	WELCOME_MESSAGE: "Welcome to Currency For You",
	REFRESH_MESSAGE: "Refreshing...",
	NO_RESULTS_MESSAGE: "No results found",
};

export const CURRENCIES = {
	DEFAULT_CURRENCY: "USD",
	FIRST_CURRENCY: "firstCurrency",
	SECOND_CURRENCY: "secondCurrency",
	EXCHANGE_CURRENCY: "currencyExchange",
	FIRST_CURRENCY_PLACEHOLDER: "Enter ",
	SECOND_CURRENCY_PLACEHOLDER: "Enter ",
	EXCHANGE_CURRENCY_PLACEHOLDER: "Enter amount to see all the exchanges",
	FIRST_CURRENCY_TYPE: "USD",
	SECOND_CURRENCY_TYPE: "MMK",
	EXCHANGE_CURRENCY_TYPE: "USD",
	EXCHANGES_PLACEHOLDER: "Enter amount to see all the exchanges",
};

export const SLICES = {
	CURRENCY: "currency",
	CURRENCIES: "currencies",
};

export const decimalPlaces = 5;
export const dots = "...";
