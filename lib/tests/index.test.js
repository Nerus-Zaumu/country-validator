"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compare_util_1 = require("./../utils/compare.util");
const __1 = require("..");
const data_1 = require("../utils/data");
const africanCountries = data_1.countries.filter((country) => country.continent === 'AFRICA');
const limitedAfricanCountries = africanCountries.slice(0, 5);
console.log(limitedAfricanCountries.length);
test('Cameroon should return a truthy value and Camersn should be falsy', () => {
    expect((0, __1.verifyCountryExistence)('Cameroon')).toBeTruthy();
    expect((0, __1.verifyCountryExistence)('Camersn')).toBeFalsy();
});
test('{name: Cameroon} should return +237, {name: Cameroon, code: CM} should return +237 {code: CM} should return cameroon', () => {
    expect((0, __1.getCountryDialCode)({ name: 'Cameroon' })).toMatch('+237');
    expect((0, __1.getCountryDialCode)({ name: 'Cameroon', code: 'CM' })).toMatch('+237');
    expect((0, __1.getCountryDialCode)({ code: 'CM' })).toMatch('+237');
});
test('{name: Cameroon} should return CM, {dial_code: +237} should return CM, {name: Cameroon, dial_code: +237} should return the same', () => {
    expect((0, __1.getCountryCode)({ name: 'Cameroon', dial_code: '+237' })).toMatch('CM');
    expect((0, __1.getCountryCode)({ name: 'Cameroon' })).toMatch('CM');
    expect((0, __1.getCountryCode)({ dial_code: '+237' })).toMatch('CM');
});
test('{code: CM}, {code: CM, dial_code: +237}, {dial_code: +237} should all return Cameroon', () => {
    expect((0, __1.getCountryName)({ code: 'CM', dial_code: '+237' })).toMatch('Cameroon');
    expect((0, __1.getCountryName)({ code: 'CM' })).toMatch('Cameroon');
    expect((0, __1.getCountryName)({ dial_code: '+237' })).toMatch('Cameroon');
});
test('{code: CM}, {dial_code: +237}, {name: Cameroon}, {code: CM, dial_code: +237, name: Cameroon} should all return {name: Cameroon, dial_code: +237, code: CM, continent: AFRICA}', () => {
    expect((0, __1.getCountryInfo)({ code: 'CM', dial_code: '+237', name: 'Cameroon' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
    expect((0, __1.getCountryInfo)({ code: 'CM', dial_code: '+237' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
    expect((0, __1.getCountryInfo)({ dial_code: '+237', name: 'Cameroon' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
    expect((0, __1.getCountryInfo)({ code: 'CM', name: 'Cameroon' })).toEqual({ name: 'Cameroon', code: 'CM', dial_code: '+237', continent: 'AFRICA' });
});
test('({name: Cameroon, code: CM, dial_code: +237}, AFRICA), ({name: Cameroon, code: CM}, AFRICA), ({name: Cameroon, dial_code: CM}, AFRICA), ({name: Cameroon}, AFRICA), ({code: Cameroon}, AFRICA), ({dial_code: Cameroon}, AFRICA)', () => {
    expect((0, __1.verifyIfCountryInContinent)({ name: 'Cameroon', code: 'CM', dial_code: '+237' }, 'AFRICA')).toBeTruthy();
    expect((0, __1.verifyIfCountryInContinent)({ dial_code: '+237' }, 'AFRICA')).toBeTruthy();
    expect((0, __1.verifyIfCountryInContinent)({ code: 'CM' }, 'AFRICA')).toBeTruthy();
    expect((0, __1.verifyIfCountryInContinent)({ name: 'Cameroon' }, 'AFRICA')).toBeTruthy();
    expect((0, __1.verifyIfCountryInContinent)({ name: 'Cameroon', code: 'CM' }, 'AFRICA')).toBeTruthy();
    expect((0, __1.verifyIfCountryInContinent)({ name: 'Cameroon', dial_code: '+237' }, 'AFRICA')).toBeTruthy();
    expect((0, __1.verifyIfCountryInContinent)({ code: 'CM', dial_code: '+237' }, 'AFRICA')).toBeTruthy();
});
test('{name: cameroon}, {code: CM}, {dial_code: +237} should return AFRICA', () => {
    expect((0, __1.getContinentOfCountry)({ name: 'cameroon' })).toMatch('AFRICA');
    expect((0, __1.getContinentOfCountry)({ code: 'CM' })).toMatch('AFRICA');
    expect((0, __1.getContinentOfCountry)({ dial_code: '+237' })).toMatch('AFRICA');
});
test('(AFRICA), (AFRICA, 5) should yield arrays of unequal lengths of african countries', () => {
    expect((0, __1.getCountriesOfContinent)('AFRICA')).toEqual(africanCountries);
    expect((0, __1.getCountriesOfContinent)('AFRICA', 5)).toEqual(limitedAfricanCountries);
});
test('() and (5) should yield arrays of unequal lengths of all countries', () => {
    expect((0, __1.getAllCountries)()).toEqual(data_1.countries);
    expect((0, __1.getAllCountries)(5)).toEqual(data_1.countries.slice(0, 5));
});
test('Depending on the params passed, there should be a sorted list of countries received', () => {
    expect((0, __1.sortCountries)({ data: africanCountries })).toEqual(africanCountries.sort(compare_util_1.compareFunc));
    expect((0, __1.sortCountries)({ data: africanCountries, limit: 5 })).toEqual(africanCountries.sort(compare_util_1.compareFunc).slice(0, 5));
    expect((0, __1.sortCountries)({ limit: 5 })).toEqual(data_1.countries.sort(compare_util_1.compareFunc).slice(0, 5));
    expect((0, __1.sortCountries)()).toEqual(data_1.countries.sort(compare_util_1.compareFunc));
});
