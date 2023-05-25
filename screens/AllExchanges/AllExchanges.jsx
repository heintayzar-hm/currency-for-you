import React from "react";
import { View } from "react-native";
import Title from "../../components/Title/Title";
import { SCREENS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import ExchangeList from "../../components/ExchangeList/ExchangeList";
import { getCurrencyExchangeRates } from "../../helper";
import { changeCurrencyExchange } from "../../redux/slices/currencySlice/currencySlice";

const AllExchanges = () => {
	const currencyState = useSelector(state => state.currency.currencyExchange);
	const dispatch = useDispatch();
	const quotes = useSelector(state => state.currencies.response.quotes);
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
