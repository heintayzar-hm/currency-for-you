import React from "react";

import { Pressable, Text, View} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { APP, SCREENS } from "../../constants";
import { useTheme } from "react-native-paper";

const SplashScreen = () => {
	const navigation = useNavigation();
	const theme = useTheme();

	return (
		<>
			<View style= {styles.container}>
				<Text style= {styles.text}>{APP.WELCOME_MESSAGE}</Text>
				<View style= {styles.buttonContainer}>
					<Pressable
						style={({pressed}) => [
							{
								backgroundColor: pressed ? theme.colors.secondary : theme.colors.primary,
							},
							styles.button,
						]}
						title={SCREENS.CURRENCIES} onPress={() => {
							navigation.navigate(SCREENS.CURRENCIES);
						}} >
						<Text>{SCREENS.CURRENCIES}</Text>

					</Pressable>
					<Pressable style={({pressed}) => [
						{
							backgroundColor: pressed ? theme.colors.primary : theme.colors.secondary,
						},
						styles.button,
					]}

					title={SCREENS.ALL_EXCHANGE_RATES}
					onPress={() => {
						navigation.navigate(SCREENS.ALL_EXCHANGE_RATES);
					}}>
						<Text>{SCREENS.ALL_EXCHANGE_RATES}</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
};

export default SplashScreen;
