import {createSlice} from '@reduxjs/toolkit';

const currencySlice = createSlice({
	name: 'Currencies',
	initialState: {
		currencies: [],
		error: null,
		loading: false,
	},
	reducers: {
	},

});

export default currencySlice.reducer;
