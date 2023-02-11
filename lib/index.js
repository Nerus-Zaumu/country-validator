"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryInfo = exports.getCountryName = exports.getCountryDialCode = exports.getCountryCode = exports.verifyCountryExistence = void 0;
const data_1 = require("./data");
const verifyCountryExistence = (country) => {
    const searchedCountry = data_1.countries.find((place) => place.name.toLocaleLowerCase() === country.toLocaleLowerCase());
    return searchedCountry ? true : false;
};
exports.verifyCountryExistence = verifyCountryExistence;
const getCountryCode = (countryObj) => {
    const result = data_1.countries.find((country) => { var _a, _b; return ((_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === ((_b = countryObj === null || countryObj === void 0 ? void 0 : countryObj.name) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()) || country.dial_code === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code); });
    return result ? result : 'Country you are looking for does not exist';
};
exports.getCountryCode = getCountryCode;
const getCountryDialCode = (countryObj) => {
    const result = data_1.countries.find((country) => { var _a, _b; return ((_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === ((_b = countryObj === null || countryObj === void 0 ? void 0 : countryObj.name) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()) || (country === null || country === void 0 ? void 0 : country.code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.code); });
    return result ? result : 'No country with the name and or code entered exists';
};
exports.getCountryDialCode = getCountryDialCode;
const getCountryName = (countryObj) => {
    const result = data_1.countries.find((country) => country.dial_code === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code) || (country === null || country === void 0 ? void 0 : country.code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.code));
    return result ? result : 'Country you are looking for does not exist';
};
exports.getCountryName = getCountryName;
const getCountryInfo = (countryObj) => {
    const result = data_1.countries.find((country) => { var _a, _b; return ((_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === ((_b = countryObj === null || countryObj === void 0 ? void 0 : countryObj.name) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()) || (country === null || country === void 0 ? void 0 : country.code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.code) || (country === null || country === void 0 ? void 0 : country.dial_code) === (countryObj === null || countryObj === void 0 ? void 0 : countryObj.dial_code); });
    result ? result : 'Country whose info is requested does not exist';
};
exports.getCountryInfo = getCountryInfo;
