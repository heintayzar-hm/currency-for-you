import {
	MD3DarkTheme,
	MD3LightTheme ,
} from "react-native-paper";

export const theme = {
	...MD3LightTheme,
	// Specify custom property
	myOwnProperty: true,
	// Specify custom property in nested object
	colors: {
		primary: "white",
		secondary: "rgb(174 255 248)"
	},
};

export const darkTheme = {
	...MD3DarkTheme,
	// Specify custom property
	myOwnProperty: true,
	// Specify custom property in nested object
	colors: {
		primary: "white",
		secondary: "rgb(46 255 236)"
	},
};
