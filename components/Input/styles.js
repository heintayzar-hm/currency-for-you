import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
		gap: 10,
	},
	input: {
		width: "80%",
		height: 40,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	button: {
		marginLeft: 10,
	},
});
