import { countries } from "./data"
import { Country } from "./types"

export const verifyCountryExistence = (country: string) => {
    const searchedCountry = countries.find((place: Country) => place.name.toLocaleLowerCase() === country.toLocaleLowerCase())
    return searchedCountry ? true : false
}

export const getCountryCode = (countryObj: Partial<Pick<Country, 'name' | 'dial_code'>>) => {
    const result = countries.find((country: Country) => country?.name?.toLocaleLowerCase() === countryObj?.name?.toLocaleLowerCase() || country.dial_code === countryObj?.dial_code)
    return result ? result : 'Country you are looking for does not exist'
}

export const getCountryDialCode = (countryObj: Partial<Pick<Country, 'code' | 'name'>>) => {
    const result = countries.find((country: Country) => country?.name?.toLocaleLowerCase() === countryObj?.name?.toLocaleLowerCase() || country?.code === countryObj?.code)
    return result ? result : 'No country with the name and or code entered exists'
}

export const getCountryName = (countryObj: Partial<Pick<Country, 'code' | 'dial_code'>>) => {
    const result = countries.find((country: Country) => country.dial_code === countryObj?.dial_code || country?.code === countryObj?.code)
    return result ? result : 'Country you are looking for does not exist'
}

export const getCountryInfo = (countryObj: Partial<Country>) => {
    const result = countries.find((country: Country) => country?.name?.toLocaleLowerCase() === countryObj?.name?.toLocaleLowerCase() || country?.code === countryObj?.code || country?.dial_code === countryObj?.dial_code)
    result ? result : 'Country whose info is requested does not exist'
}