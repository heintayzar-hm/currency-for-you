import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/Splash/SplashScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './constants';
import {persistor, store} from './redux/store';

const Stack = createNativeStackNavigator();

const App = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={SCREENS.SPLASH}
				component={SplashScreen}

			/>

		</Stack.Navigator>
	</NavigationContainer>
);

const AppProvider = () => (
	<Provider store={store}>
		<PersistGate loading={<SplashScreen />} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

export default AppProvider;
