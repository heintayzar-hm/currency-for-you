import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "./screens/Splash/SplashScreen";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {
	PaperProvider,
} from "react-native-paper";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {APP, SCREENS} from "./constants";
import {persistor, store} from "./redux/store";
import CurrenciesScreen from "./screens/Currencies/CurrenciesScreen";
import CurrenciesListScreen from "./screens/CurrenciesListScreen/CurrenciesListScreen";
import Loading from "./screens/Loading/Loading";
import AllExchanges from "./screens/AllExchanges/AllExchanges";
import { useColorScheme } from "react-native";
import { darkTheme, theme } from "./theme";


const Stack = createNativeStackNavigator();

const App = () => {

	return (

		<Stack.Navigator>
			<Stack.Screen
				name={SCREENS.SPLASH}
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={SCREENS.CURRENCIES}
				component={CurrenciesScreen}
				options={{ title: APP.NAME }}
			/>
			<Stack.Screen
				name={SCREENS.CURRENCIES_LIST}
				component={CurrenciesListScreen}
				options={{ title: APP.NAME }}
			/>
			<Stack.Screen
				name={SCREENS.ALL_EXCHANGE_RATES}
				component={AllExchanges}
				options={{ title: APP.NAME }}
			/>
		</Stack.Navigator>


	);
};

const AppProvider = () => {
	const colorScheme = useColorScheme();

	const paperTheme =
    colorScheme === "dark"? darkTheme : theme;

	return (
		<PaperProvider theme={paperTheme}>
			<Provider store={store}>
				<PersistGate loading={<Loading />} persistor={persistor}>
					<NavigationContainer>
						<App />
					</NavigationContainer>
				</PersistGate>

			</Provider>
		</PaperProvider>
	);
}
;

export default AppProvider;
