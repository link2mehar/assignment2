import http from "./index";

export const getAll = () => {
    return http.get('/codes');
}

export const pairConversion = (parms) => {
    const { baseValue, targetValue, parsedValue } = parms?.payload;
    return http.get(`/pair/${baseValue}/${targetValue}/${parsedValue}`)
}

export const conversionRates = (parms) => {
    const defaultCurrency = parms?.payload;
    return http.get(`/latest/${defaultCurrency}`);
}