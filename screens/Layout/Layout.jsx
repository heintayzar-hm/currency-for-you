import React from 'react';
import PropTypes from 'prop-types';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	useColorScheme,
} from 'react-native';

import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';

const Layout = ({children}) => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={backgroundStyle}>
				{children}

			</ScrollView>
		</SafeAreaView>

	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
