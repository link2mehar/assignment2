import { call, put, takeLatest, all } from 'redux-saga/effects'
import { getAll, pairConversion, conversionRates } from "../http/exchange-service";
import { setCurr, getCurrencies, getPairFetch, getPairSuccess, getConversionRates, getConversionSuccess } from '../slices/currencyExchange';



function* fetchList() {

    try {
        const response = yield call(() => getAll());
        const { data } = response;
        console.log('>>data', data)
        yield put(setCurr({ data }))

    } catch (err) {

    }
}

function* workPairConvert(parms) {
    try {
        const response = yield call(() => pairConversion(parms))
        const { data } = response;
        yield put(getPairSuccess({ data }))
    } catch (err) {

    }
}

function* workConversionRates(parms) {
    try {
        const response = yield call(() => conversionRates(parms))
        const { data } = response;
        yield put(getConversionSuccess({ data }))
    } catch (err) {

    }
}

function* currencySaga() {
    yield all([
        takeLatest(getCurrencies.type, fetchList),
        takeLatest(getPairFetch.type, workPairConvert),
        takeLatest(getConversionRates.type, workConversionRates)
    ])
}

export default currencySaga;