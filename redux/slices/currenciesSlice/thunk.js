import {createAsyncThunk} from "@reduxjs/toolkit";
import {getRatesFromASource} from "../../api/currenciesApi/currenciesApi";

export const getRates = createAsyncThunk("/rates", async (_, {rejectWithValue}) => {
	try {
		const response = await getRatesFromASource();
		if (response.data.success) {
			return response.data;
		}

		return rejectWithValue("Rates fetching failed");
	} catch (error) {
		return rejectWithValue(error.message);
	}
});
