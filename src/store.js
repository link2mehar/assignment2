import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import currencySaga from "./sagas";
import currencyExchangeReducer from "./slices/currencyExchange";

let saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        currency: currencyExchangeReducer
    },
    middleware: [saga]
})

saga.run(currencySaga);

export default store;