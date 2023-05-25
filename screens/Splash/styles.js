import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "column",
		gap: 10,
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "100%"
	},
	text: {
		fontSize: 20,
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "column",
		gap: 10,
		width: "90%",
	},
	button: {
		borderRadius: 200,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		elevation: 3,
	},
	hover: {
		backgroundColor: "red"
	}
});
