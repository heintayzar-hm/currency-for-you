import { StyleSheet } from "react-native";

export default StyleSheet.create({
	currencyContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	currencyCode: {
		marginRight: 10,
		fontWeight: "bold",
	},
	currencyName: {
		flex: 1,
	},
	searchContainer: {
		backgroundColor: "white",
		padding: 10,
	},
	searchInput: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		paddingHorizontal: 10,
	},
	currencyBold: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "rgb(174 255 248)",
	},
	currencyBoldText: {
		fontWeight: "bold",
		backgroundColor: "rgb(174 255 248)",
		color: "black",
	},
	currencyCodeBoldText: {
		marginRight: 10,
		fontWeight: "bold",
		backgroundColor: "rgb(174 255 248)",
		color: "black",
	},
	currencyNameBoldText: {
		flex: 1,
		fontWeight: "bold",
		backgroundColor: "rgb(174 255 248)",
		color: "black",
	},
});
