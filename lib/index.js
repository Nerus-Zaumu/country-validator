"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCountries = exports.getAllCountries = exports.getCountriesOfContinent = exports.getContinentOfCountry = exports.verifyIfCountryInContinent = exports.getCountryInfo = exports.getCountryName = exports.getCountryDialCode = exports.getCountryCode = exports.verifyCountryExistence = void 0;
const compare_util_1 = require("./utils/compare.util");
const data_1 = require("./utils/data");
const verifyCountryExistence = (country) => {
    const searchedCountry = data_1.countries.find((place) => { var _a; return (_a = place.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(country.toLowerCase()); });
    return searchedCountry ? true : false;
};
exports.verifyCountryExistence = verifyCountryExistence;
const getCountryCode = (countryObj) => {
    const result = countryObj.name ? data_1.countries.find((country) => { var _a; return (_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name.toLowerCase()); }) :
        (countryObj.dial_code) && data_1.countries.find((country) => country.dial_code === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return result ? result.code : new Error('Country you are looking for does not exist');
};
exports.getCountryCode = getCountryCode;
const getCountryDialCode = (countryObj) => {
    const result = countryObj.name ? data_1.countries.find((country) => country.name.toLowerCase().includes(countryObj.name.toLowerCase())) :
        (countryObj.code) && data_1.countries.find((country) => country.code === countryObj.code);
    return result ? result.dial_code : new Error('Could not find Country. Verify parameters');
};
exports.getCountryDialCode = getCountryDialCode;
const getCountryName = (countryObj) => {
    const result = countryObj.code ? data_1.countries.find((country) => country.code === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.code)) :
        (countryObj.dial_code) && data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.dial_code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return result ? result.name : new Error('Country you are looking for does not exist');
};
exports.getCountryName = getCountryName;
const getCountryInfo = (countryObj) => {
    const result = countryObj.name ? data_1.countries.find((country) => { var _a; return (_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name.toLowerCase()); }) :
        countryObj.dial_code ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.code)) :
            countryObj.code && data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.dial_code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return result ? result : new Error('Country whose info is requested does not exist');
};
exports.getCountryInfo = getCountryInfo;
const verifyIfCountryInContinent = (countryObj, continent) => {
    const result = countryObj.name ? data_1.countries.find((country) => { var _a; return ((_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name.toLowerCase())) && country.continent === continent; }) :
        countryObj.code ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.code) && country.continent === continent) :
            countryObj.dial_code && data_1.countries.find((country) => country.dial_code === countryObj.dial_code && country.continent === continent);
    return result ? result : new Error('Make sure you passed the correct parameters');
};
exports.verifyIfCountryInContinent = verifyIfCountryInContinent;
const getContinentOfCountry = (countryObj) => {
    const country = countryObj.name ? data_1.countries.find((country) => { var _a; return (_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(countryObj === null || countryObj === void 0 ? void 0 : countryObj.name.toLowerCase()); }) :
        (countryObj.code) ? data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.code)) :
            (countryObj.dial_code) && data_1.countries.find((country) => (country === null || country === void 0 ? void 0 : country.dial_code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code));
    return country ? country.continent : new Error('Could not find country you are looking for');
};
exports.getContinentOfCountry = getContinentOfCountry;
const getCountriesOfContinent = (continent, limit) => {
    const requestedCountries = data_1.countries.filter((country) => country.continent === continent);
    return requestedCountries ?
        (limit ? requestedCountries.slice(limit - 1) : requestedCountries)
        : new Error('Could not find countries being requested');
};
exports.getCountriesOfContinent = getCountriesOfContinent;
const getAllCountries = (limit) => {
    const requestedCountries = limit ? data_1.countries.slice(limit - 1) : data_1.countries;
    return requestedCountries;
};
exports.getAllCountries = getAllCountries;
const sortCountries = (sortObj) => {
    var _a;
    const sortedCountries = (sortObj === null || sortObj === void 0 ? void 0 : sortObj.data) ? (_a = sortObj.data) === null || _a === void 0 ? void 0 : _a.sort(compare_util_1.compareFunc) : data_1.countries.sort(compare_util_1.compareFunc);
    const result = !(sortObj === null || sortObj === void 0 ? void 0 : sortObj.limit) ? sortedCountries : sortedCountries.slice(sortObj.limit - 1);
    return result ? result : new Error('Could not sort successfully. Make sure you entered the correct parameters');
};
exports.sortCountries = sortCountries;
