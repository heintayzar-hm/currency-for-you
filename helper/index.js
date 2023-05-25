import {API, CURRENCIES, decimalPlaces} from "../constants";

export const calculateExchangeRate = (rates, baseCurrency, targetCurrency) => {
	// Get the USD rate for the base currency
	const baseRate = baseCurrency === CURRENCIES.DEFAULT_CURRENCY ? 1 : rates[`USD${baseCurrency}`];
	// Get the USD rate for the target currency
	const targetRate = targetCurrency === CURRENCIES.DEFAULT_CURRENCY ? 1 : rates[`USD${targetCurrency}`];

	// Calculate the exchange rate between the two currencies (when base is 1)
	const exchangeRate = targetRate / baseRate;

	return exchangeRate;
};

export const calculateExchangeAmount = (amount, exchangeRate) => {
	if (amount === "" || isNaN(amount)) {
		return "";
	}

	if (Number.isInteger(amount)) {
		return (amount * exchangeRate);
	}

	return (amount * exchangeRate).toFixed(decimalPlaces);
};

export const getRate = (name, quotes, firstCurrency, secondCurrency) => {
	let rate;
	if (name === CURRENCIES.FIRST_CURRENCY) {
		rate = calculateExchangeRate(quotes, firstCurrency.type, secondCurrency.type);
	} else {
		rate = calculateExchangeRate(quotes, secondCurrency.type, firstCurrency.type);
	}

	return rate;
};

export const getTwoTimeDifferenceInMins = (time1, time2) => {
	const timeDiff =  time2.getTime() - time1.getTime();
	return Math.floor(timeDiff / (1000 * 60));
};

export const fetchOrNot = timeDiff => (timeDiff >= API.MINUTES_TO_REFRESH);

export const getCurrencyExchangeRates = (quotes, type, value = 1) => {
	const currencyExchangeRates = {};
	const conversionRate = calculateExchangeRate(quotes, type, CURRENCIES.DEFAULT_CURRENCY);
	for (const key in quotes) {
		const formattedKey = key.replace(CURRENCIES.DEFAULT_CURRENCY, "");
		const convertedRate = quotes[key] * conversionRate * value;
		currencyExchangeRates[formattedKey] = convertedRate;
	}

	return currencyExchangeRates;
};

export const getCurrencyExchangeRate = (conversionRate, value, times) => (conversionRate * value * times);

export const getMonthName = (date)=> {
	const monthOptions = { month: "long" };
	const monthName = date.toLocaleString("en-US", monthOptions);
	return monthName;
};

export const convertDateString=(dateString) => {
	const date = new Date(dateString);

	const formattedString = `${date.getFullYear()}/${getMonthName(date)}/${date.getDay()} (${date.getHours()}:${date.getMinutes()})`;

	return formattedString;
};
