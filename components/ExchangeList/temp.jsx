import React, {useState} from "react";
import PropTypes from "prop-types";
import {View, Text, TextInput, SafeAreaView, VirtualizedList} from "react-native";
import styles from "./styles";
import { APP, CURRENCIES } from "../../constants";
import uuid from "react-native-uuid";
import { calculateExchangeRate, getCurrencyExchangeRate } from "../../helper";


const renderCurrency = ({item, currentCurrency, currencies,value,conversionRate }) => (
	<View key={item}>
		{
			item === currentCurrency ? (
				<View style={styles.currencyContainer} key={item}>
					<Text style={styles.currencyCode}>{item}</Text>
					<Text>   100000   </Text>
					<Text style={styles.currencyName}>{currencies[item]}</Text>
				</View>
			)
				: (<View style={styles.currencyContainer} key={item}>
					<Text style={styles.currencyCode}>{item}</Text>
					<Text>   -   </Text>
					<Text style={styles.currencyName}>{ getCurrencyExchangeRate(conversionRate, currencies[item],value )}</Text>
				</View>)
		}
	</View>
);

const ExchangeList = ({currencies, currentCurrency, value}) => {
	const [searchText, setSearchText] = useState("");
	const currencyData = Object.keys(currencies);
	const conversionRate = calculateExchangeRate(currencies, currentCurrency, CURRENCIES.DEFAULT_CURRENCY);
	return (
		<>
			<SafeAreaView style={styles.safeArea} forceInset={{top: "always"}}>
				<View style={styles.searchContainer}>
					<TextInput
						style={styles.searchInput}
						placeholder={APP.SEARCH_BAR_PLACEHOLDER}
						value={searchText}
						onChangeText={setSearchText} />
				</View>
			</SafeAreaView>

			<SafeAreaView>
				<VirtualizedList
					data={currencyData}
					renderItem={({ item }) => renderCurrency({ item, currentCurrency, conversionRate, value, currencies })}
					keyExtractor={item => item}
					getItemCount={data => data.length}
					getItem={(data, index) => data[index]}
					initialNumToRender={5}
				/>
			</SafeAreaView>

		</>
	);
};

ExchangeList.propTypes = {
	currencies: PropTypes.objectOf(PropTypes.string).isRequired,
	currentCurrency: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default ExchangeList;
