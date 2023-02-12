import { compareFunc } from './utils/compare.util';
import { countries } from './utils/data';
import { Continent, Country } from "./utils/types"

export const verifyCountryExistence = (country: string) => {
    const searchedCountry = countries.find((place: Country) => place.name?.toLowerCase().includes(country.toLowerCase()));
    return searchedCountry ? true : false;
}

export const getCountryCode = (countryObj: Partial<Pick<Country, 'name' | 'dial_code'>>) => {
    const result = countryObj.name ? countries.find((country: Country) => country?.name?.toLowerCase().includes(countryObj?.name!.toLowerCase())) :
    (countryObj.dial_code) && countries.find((country: Country) => country.dial_code === countryObj?.dial_code)
    return result ? result.code : new Error('Country you are looking for does not exist');
}

export const getCountryDialCode = (countryObj: Partial<Pick<Country, 'code' | 'name'>>) => {
    const result = countryObj.name ? countries.find((country: Country) => country.name.toLowerCase().includes(countryObj.name!.toLowerCase())) : 
    (countryObj.code) && countries.find((country: Country) => country.code === countryObj.code)
    return result ? result.dial_code : new Error('Could not find Country. Verify parameters');

}

export const getCountryName = (countryObj: Partial<Pick<Country, 'code' | 'dial_code'>>) => {
    const result = countryObj.code ? countries.find((country: Country) => country.code === countryObj?.code) :
    (countryObj.dial_code) && countries.find((country: Country) => country?.dial_code === countryObj?.dial_code)
    return result ? result.name : new Error('Country you are looking for does not exist');
}

export const getCountryInfo = (countryObj: Partial<Omit<Country, 'continent'>>) => {
    const result = countryObj.name ? countries.find((country: Country) => country?.name?.toLowerCase().includes(countryObj?.name!.toLowerCase())) : 
    countryObj.dial_code ? countries.find((country: Country) => country?.code === countryObj?.code) : 
    countryObj.code && countries.find((country: Country) => country?.dial_code === countryObj?.dial_code)
    return result ? result : new Error('Country whose info is requested does not exist');
}

export const verifyIfCountryInContinent = (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>, continent: Continent) => {
    const result = countryObj.name ? countries.find((country: Country) => country?.name?.toLowerCase().includes(countryObj?.name!.toLowerCase()) && country.continent === continent) :
    countryObj.code ? countries.find((country: Country) => country?.code === countryObj?.code && country.continent === continent) :
    countryObj.dial_code && countries.find((country: Country) => country.dial_code === countryObj.dial_code && country.continent === continent) 
    return result ? result : new Error('Make sure you passed the correct parameters');
}

export const getContinentOfCountry = (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>) => {
    const country = countryObj.name ? countries.find((country: Country) => country?.name?.toLowerCase().includes(countryObj?.name!.toLowerCase())) :
    (countryObj.code) ? countries.find((country: Country) => country?.code === countryObj?.code) :
    (countryObj.dial_code) && countries.find((country: Country) => country?.dial_code === countryObj?.dial_code)
    return country ? country.continent : new Error('Could not find country you are looking for');
}

export const getCountriesOfContinent = (continent: Continent, limit?: number) => {
    const requestedCountries = countries.filter((country: Country) => country.continent === continent)
    return requestedCountries ?
        (limit ? requestedCountries.slice(limit - 1) : requestedCountries)
        : new Error('Could not find countries being requested');
}

export const getAllCountries = (limit?: number) => {
    const requestedCountries = limit ? countries.slice(limit - 1) : countries
    return requestedCountries;
}

export const sortCountries = (sortObj?: {data?: Country[], limit?: number}) => {
    const sortedCountries = sortObj?.data ? sortObj.data?.sort(compareFunc) : countries.sort(compareFunc)
    const result = !sortObj?.limit ? sortedCountries : sortedCountries.slice(sortObj.limit - 1)
    return result ? result : new Error('Could not sort successfully. Make sure you entered the correct parameters');
}
