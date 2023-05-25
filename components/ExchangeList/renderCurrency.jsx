import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

import styles from "./styles";

const renderCurrency = ({item, currentCurrency, currencies }) => (
	<View key={item} style={{ flex:1 }}>
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
					<Text style={styles.currencyName}>{currencies[item] }</Text>
				</View>)
		}
	</View>
);

export default renderCurrency;
