import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currencies: [],
    currenciesLoading: false,
    pairIsLoading: false,
    conversionList: []
};

const currencyExchangeSlice = createSlice({
    name: 'currencyExchange',
    initialState,
    reducers: {
        getCurrencies: (state) => {
            state.currenciesLoading = true;
        },
        setCurr: (state, action) => {

            state.currencies = action.payload?.data?.supported_codes;
            state.currenciesLoading = false;
        },
        getPairFetch: (state) => {
            state.pairIsLoading = true;
        },
        getPairSuccess: (state, action) => {
            state.convertedVlaue = action.payload?.data?.conversion_result;
            state.pairIsLoading = false;
        },
        getPairFailure: (state) => {
            state.pairIsLoading = false;

        },
        getConversionRates: (state) => {

        },
        getConversionSuccess: (state, action) => {
            state.conversionList = action.payload?.data?.conversion_rates;
        },

    }
})

export const { getCurrencies, setCurr, getPairFetch, getPairSuccess, getPairFailure, getConversionRates, getConversionSuccess } = currencyExchangeSlice.actions;

export default currencyExchangeSlice.reducer;