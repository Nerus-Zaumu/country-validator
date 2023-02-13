import { capitalize, compareFunc } from './utils/compare.util';
import { countries } from './utils/data';
import { Continent, Country } from "./utils/types"

export const verifyCountryExistence = (country: string) => {
    const searchedCountry = countries.find((place: Country) => place.name === capitalize(country));
    return searchedCountry ? true : false;
}

export const getCountryCode = (countryObj: Partial<Pick<Country, 'name' | 'dial_code'>>) => {
    const result = countryObj.name ? countries.find((country: Country) => country?.name === capitalize(countryObj?.name)) :
    (countryObj.dial_code) && countries.find((country: Country) => country.dial_code === countryObj?.dial_code)
    return result ? result.code : {};
}

export const getCountryDialCode = (countryObj: Partial<Pick<Country, 'code' | 'name'>>) => {
    const result = countryObj.name ? countries.find((country: Country) => country.name === capitalize(countryObj.name)): 
    (countryObj.code) && countries.find((country: Country) => country.code === capitalize(countryObj.code))
    return result ? result.dial_code : {};

}

export const getCountryName = (countryObj: Partial<Pick<Country, 'code' | 'dial_code'>>) => {
    const result = countryObj.code ? countries.find((country: Country) => country.code === capitalize(countryObj?.code)) :
    (countryObj.dial_code) && countries.find((country: Country) => country?.dial_code === countryObj?.dial_code)
    return result ? result.name : {};
}

export const getCountryInfo = (countryObj: Partial<Omit<Country, 'continent'>>) => {
    const result = countryObj.name ? countries.find((country: Country) => country?.name === capitalize(countryObj?.name)): 
    countryObj.dial_code ? countries.find((country: Country) => country?.code === capitalize(countryObj?.code)) : 
    countryObj.code && countries.find((country: Country) => country?.dial_code === countryObj?.dial_code)
    return result ? result : {};
}

export const verifyIfCountryInContinent = (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>, continent: Continent) => {
    const result = countryObj.name ? countries.find((country: Country) => country?.name === capitalize(countryObj?.name) && country.continent === continent) :
    countryObj.code ? countries.find((country: Country) => country?.code === capitalize(countryObj?.code) && country.continent === continent.toUpperCase()) :
    countryObj.dial_code && countries.find((country: Country) => country.dial_code === countryObj.dial_code && country.continent === continent.toUpperCase()) 
    return result ? result : {};
}

export const getContinentOfCountry = (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>) => {
    const country = countryObj.name ? countries.find((country: Country) => country?.name === capitalize(countryObj?.name)) :
    (countryObj.code) ? countries.find((country: Country) => country?.code === capitalize(countryObj?.code)) :
    (countryObj.dial_code) && countries.find((country: Country) => country?.dial_code === countryObj?.dial_code)
    return country ? country.continent : {};
}

export const getCountriesOfContinent = (continent: Continent, limit?: number) => {
    const requestedCountries = countries.filter((country: Country) => country.continent === continent.toUpperCase())
    return requestedCountries ?
        (limit ? requestedCountries.slice(0, limit) : requestedCountries) : {};
}

export const getAllCountries = (limit?: number) => {
    const requestedCountries = limit ? countries.slice(0, limit) : countries
    return requestedCountries ? requestedCountries : {};
}

export const sortCountries = (sortObj?: {data?: Country[], limit?: number}) => {
    const sortedCountries = sortObj?.data ? sortObj.data?.sort(compareFunc) : countries.sort(compareFunc)
    const result = !sortObj?.limit ? sortedCountries : sortedCountries.slice(0, sortObj.limit)
    return result ? result : {}
}
