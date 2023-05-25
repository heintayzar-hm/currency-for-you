import React from "react";
import {TextInput, View, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PropTypes from "prop-types";
import {SCREENS} from "../../constants";
import styles from "./styles";
const Input = ({onChangeText, type, name, value, placeholder, button, id}) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={value}
				placeholder={placeholder}
				onChangeText={value => onChangeText(value, type, name, id)}
				keyboardType='numeric'
				type={type}
				name={name}
			/>
			{
				button && (
					<Button style={styles.button} title={String(type)} onPress={() => {
						navigation.navigate(SCREENS.CURRENCIES_LIST, {type, name});
					}} />
				)
			}
		</View>
	);
};


Input.propTypes = {
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	button: PropTypes.bool,
	id: PropTypes.number,
};

export default Input;
