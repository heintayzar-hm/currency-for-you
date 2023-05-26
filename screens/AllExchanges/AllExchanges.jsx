import React, { useEffect } from "react";
import { View } from "react-native";
import Title from "../../components/Title/Title";
import { SCREENS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import ExchangeList from "../../components/ExchangeList/ExchangeList";
import { fetchOrNot, getCurrencyExchangeRates, getTwoTimeDifferenceInMins } from "../../helper";
import { changeCurrencyExchange } from "../../redux/slices/currencySlice/currencySlice";
import { getRates } from "../../redux/slices/currenciesSlice/thunk";

const AllExchanges = () => {
	const currencyState = useSelector(state => state.currency.currencyExchange);
	const dispatch = useDispatch();
	const quotes = useSelector(state => state.currencies.response.quotes);

	const liveCurrencies = useSelector(state => state.currencies);

	useEffect(() => {
		if (Object.keys(liveCurrencies.response).length === 0) {
			dispatch(getRates());
			return;
		}

		// The time difference between now and the last fetched time
		const timeDiffInMins = getTwoTimeDifferenceInMins(new Date(liveCurrencies.latestFetched), new Date());
		if (fetchOrNot(timeDiffInMins)) {
			dispatch(getRates());
		}
	}, []);

	if (liveCurrencies.error) return (<Title>{liveCurrencies.error}</Title>);
	if(Object.keys(liveCurrencies.response).length === 0) return (<Title>Loading...</Title>);


	const onChangeText = value => {
		const val = isNaN(value) ? 0 : value;
		dispatch(changeCurrencyExchange({val}));
	};
	if (!currencyState) {
		return null;
	}
	return (
		<View>
			<Title>{SCREENS.ALL_EXCHANGE_RATES}</Title>
			<Input
				onChangeText = {onChangeText}
				type = {currencyState.type}
				name = {currencyState.name}
				value = {String(currencyState.value)}
				placeholder = {currencyState.placeholder}
				button
			/>
			<ExchangeList
				currencies={getCurrencyExchangeRates(quotes, currencyState.type, currencyState.value)}
				currentCurrency={currencyState.type}
			/>
		</View>
	);
};

export default AllExchanges;
