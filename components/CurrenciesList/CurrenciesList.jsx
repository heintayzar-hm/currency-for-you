import React, {useState} from "react";
import PropTypes from "prop-types";
import { View, TextInput, SafeAreaView, Dimensions, Text } from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import styles from "./styles";
import { APP } from "../../constants";
import renderCurrency from "./renderCurrency";


const CurrenciesList = ({currencies, onCurrencyClick, currentCurrency}) => {
	const [searchText, setSearchText] = useState("");
	const currencyData = Object.keys(currencies);

	const filteredCurrencies = currencyData.filter(currency =>
		currency.toLowerCase().includes(searchText.toLowerCase()),
	);

	const { width } = Dimensions.get("window");

	const dataProvider = new DataProvider((r1, r2) => r1 !== r2);
	const layoutProvider = new LayoutProvider(
		index => index,
		(type, dim) => {
			dim.width = width;
			dim.height = 50; // Adjust the height according to your needs
		}
	);

	return (
		<>
			<SafeAreaView style={styles.safeArea} forceInset={{top: "always"}}>
				<View style={styles.searchContainer}>
					<TextInput
						style={styles.searchInput}
						placeholder={APP.SEARCH_BAR_PLACEHOLDER}
						value={searchText}
						onChangeText={setSearchText} />
				</View>
			</SafeAreaView>
			<View>
				{
					filteredCurrencies.length > 0 ? (
						<RecyclerListView
							dataProvider={dataProvider.cloneWithRows(filteredCurrencies)}
							rowRenderer={(_,item) => renderCurrency({ item, currentCurrency, currencies, onCurrencyClick })}
							layoutProvider={layoutProvider}
							style={{ width: "100%", height: "100%"}}
						/>
					) :
						(
							<Text> {APP.NO_RESULTS_MESSAGE} </Text>
						)
				}
			</View>
		</>
	);
};

CurrenciesList.propTypes = {
	currencies: PropTypes.objectOf(PropTypes.string).isRequired,
	onCurrencyClick: PropTypes.func.isRequired,
	currentCurrency: PropTypes.string.isRequired,
};

export default CurrenciesList;
