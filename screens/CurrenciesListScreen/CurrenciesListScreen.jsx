import React from "react";
import PropTypes from "prop-types";
import CurrenciesList from "../../components/CurrenciesList/CurrenciesList";
import {currenciesNames} from "../../constants/currencies";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";

import {changeCurrencyType} from "../../redux/slices/currencySlice/currencySlice";
const CurrenciesListScreen = ({route}) => {
	const {type, name} = route.params;
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const onCurrencyClick = type => {
		dispatch(changeCurrencyType({name, type}));
		navigation.goBack();
	};

	return (
		<CurrenciesList
			currencies = {currenciesNames}
			onCurrencyClick={onCurrencyClick}
			currentCurrency={type}
			currentCurrencyName={name}
			button
		/>
	);
};

CurrenciesListScreen.propTypes = {
	route: PropTypes.object.isRequired,
};

export default CurrenciesListScreen;
