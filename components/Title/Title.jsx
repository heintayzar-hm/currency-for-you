import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

// Styles
// import styles from './Title.styles'; if too big, move to styles.js

const styles = {
	header: {
		fontSize: 32,
		textAlign: 'center',
	},
};

const Title = ({children}) => (
	<Text style={styles.header}>{children}</Text>
);

Title.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Title;
