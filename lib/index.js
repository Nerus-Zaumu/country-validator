"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCountries = exports.getAllCountries = exports.getCountriesOfContinent = exports.getContinentOfCountry = exports.verifyIfCountryInContinent = exports.getCountryInfo = exports.getCountryName = exports.getCountryDialCode = exports.getCountryCode = exports.verifyCountryExistence = void 0;
const compare_util_1 = require("./utils/compare.util");
const data_1 = require("./utils/data");
const verifyCountryExistence = (country) => {
    const searchedCountry = data_1.countries.find((place) => place.name === (0, compare_util_1.capitalize)(country));
    return searchedCountry ? true : false;
};
exports.verifyCountryExistence = verifyCountryExistence;
const getCountryCode = (countryObj) => {
    const result = countryObj.name ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.name) === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name)) :
        (countryObj.dial_code) && data_1.countries.find((country) => country.dial_code === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return result ? result.code : {};
};
exports.getCountryCode = getCountryCode;
const getCountryDialCode = (countryObj) => {
    const result = countryObj.name ? data_1.countries.find((country) => country.name === (0, compare_util_1.capitalize)(countryObj.name)) :
        (countryObj.code) && data_1.countries.find((country) => country.code === (0, compare_util_1.capitalize)(countryObj.code));
    return result ? result.dial_code : {};
};
exports.getCountryDialCode = getCountryDialCode;
const getCountryName = (countryObj) => {
    const result = countryObj.code ? data_1.countries.find((country) => country.code === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.code)) :
        (countryObj.dial_code) && data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.dial_code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return result ? result.name : {};
};
exports.getCountryName = getCountryName;
const getCountryInfo = (countryObj) => {
    const result = countryObj.name ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.name) === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name)) :
        countryObj.dial_code ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.code) === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.code)) :
            countryObj.code && data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.dial_code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return result ? result : {};
};
exports.getCountryInfo = getCountryInfo;
const verifyIfCountryInContinent = (countryObj, continent) => {
    const result = countryObj.name ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.name) === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name) && country.continent === continent) :
        countryObj.code ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.code) === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.code) && country.continent === continent.toUpperCase()) :
            countryObj.dial_code && data_1.countries.find((country) => country.dial_code === countryObj.dial_code && country.continent === continent.toUpperCase());
    return result ? result : {};
};
exports.verifyIfCountryInContinent = verifyIfCountryInContinent;
const getContinentOfCountry = (countryObj) => {
    const country = countryObj.name ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.name) === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name)) :
        (countryObj.code) ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.code) === (0, compare_util_1.capitalize)(countryObj === null || countryObj === void 0 ? void 0 : countryObj.code)) :
            (countryObj.dial_code) && data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.dial_code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return country ? country.continent : {};
};
exports.getContinentOfCountry = getContinentOfCountry;
const getCountriesOfContinent = (continent, limit) => {
    const requestedCountries = data_1.countries.filter((country) => country.continent === continent.toUpperCase());
    return requestedCountries ?
        (limit ? requestedCountries.slice(0, limit) : requestedCountries) : {};
};
exports.getCountriesOfContinent = getCountriesOfContinent;
const getAllCountries = (limit) => {
    const requestedCountries = limit ? data_1.countries.slice(0, limit) : data_1.countries;
    return requestedCountries ? requestedCountries : {};
};
exports.getAllCountries = getAllCountries;
const sortCountries = (sortObj) => {
    var _a;
    const sortedCountries = (sortObj === null || sortObj === void 0 ? void 0 : sortObj.data) ? (_a = sortObj.data) === null || _a === void 0 ? void 0 : _a.sort(compare_util_1.compareFunc) : data_1.countries.sort(compare_util_1.compareFunc);
    const result = !(sortObj === null || sortObj === void 0 ? void 0 : sortObj.limit) ? sortedCountries : sortedCountries.slice(0, sortObj.limit);
    return result ? result : {};
};
exports.sortCountries = sortCountries;
