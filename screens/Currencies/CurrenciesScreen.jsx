import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import {getRates} from "../../redux/slices/currenciesSlice/thunk";
import { CURRENCIES, SCREENS, dots} from "../../constants";
import {calculateExchangeAmount, fetchOrNot, getTwoTimeDifferenceInMins, getRate, convertDateString} from "../../helper";
import {changeCurrency} from "../../redux/slices/currencySlice/currencySlice";

const CurrenciesScreen = () => {
	const dispatch = useDispatch();
	const liveCurrencies = useSelector(state => state.currencies);
	const { firstCurrency, secondCurrency } = useSelector(state => state.currency);

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


	const handleInputChange = (value, type, name) => {
		const {quotes} = liveCurrencies.response;
		const rate = getRate(name, quotes, firstCurrency, secondCurrency);
		const amount = calculateExchangeAmount(value, rate);
		dispatch(changeCurrency({name, value, type, amount}));
	};

	return (
		<View>
			<Title>{ SCREENS.CURRENCIES }</Title>
			<Input
				value={String(firstCurrency.value)}
				placeholder={CURRENCIES.FIRST_CURRENCY_PLACEHOLDER + firstCurrency.type + dots}
				name={firstCurrency.name}
				onChangeText={handleInputChange}
				type={firstCurrency.type}
				button
			></Input>
			<Input
				value={String(secondCurrency.value)}
				name={secondCurrency.name}
				placeholder={CURRENCIES.SECOND_CURRENCY_PLACEHOLDER + secondCurrency.type + dots}
				onChangeText={handleInputChange}
				type={secondCurrency.type}
				button
			></Input>
			<View style={{padding: 10}}>
				<Text>
				As of <Text style={{fontWeight: "bold"}}>{convertDateString(liveCurrencies.latestFetched)}</Text>, the current rate is
				</Text>
				<Text>
					1 {firstCurrency.type} =
					<Text style={{fontWeight: "bold"}}>{getRate(firstCurrency.name, liveCurrencies.response.quotes, firstCurrency, secondCurrency).toFixed(2)}</Text>
					{secondCurrency.type}
				</Text>
			</View>
		</View>
	);
};

export default CurrenciesScreen;
