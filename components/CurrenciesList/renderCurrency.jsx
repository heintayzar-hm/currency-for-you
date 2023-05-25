import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
const renderCurrency = ({item, currentCurrency, onCurrencyClick, currencies}) => (
	<TouchableOpacity onPress={() => onCurrencyClick(item)} id='item' key={item}>
		{
			item === currentCurrency ? (
				<View style={styles.currencyBold} key={item}>
					<Text style={styles.currencyCodeBoldText}>{item}</Text>
					<Text>   -   </Text>
					<Text style={styles.currencyNameBoldText}>{currencies[item]}</Text>
					<Icon name="pin" size={30} color="blue" />
				</View>
			)
				: (<View style={styles.currencyContainer} key={item}>
					<Text style={styles.currencyCode}>{item}</Text>
					<Text>   -   </Text>
					<Text style={styles.currencyName}>{currencies[item]}</Text>
				</View>)
		}
	</TouchableOpacity>
);


export default renderCurrency;
