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
});
