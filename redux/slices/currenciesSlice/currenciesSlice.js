import {createSlice} from "@reduxjs/toolkit";
import {getRates} from "./thunk";
import { SLICES } from "../../../constants";

const currenciesSlice = createSlice({
	name: SLICES.CURRENCIES,
	initialState: {
		response: {},
		error: null,
		loading: false,
		latestFetched: null,
	},
	reducers: {
	},
	extraReducers(builder) {
		builder.addCase(getRates.fulfilled, (state, action) => ({
			...state, response: action.payload, loading: false, latestFetched: new Date(), error: null,
		}));
		builder.addCase(getRates.rejected, (state) => ({ ...state, loading: false, error: "Cannot receive data from the server" }));
		builder.addCase(getRates.pending, (state) => ({ ...state, loading: true }));
	},
});

export default currenciesSlice.reducer;
