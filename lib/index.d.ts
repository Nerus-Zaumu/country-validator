import { Continent, Country } from "./utils/types";
export declare const verifyCountryExistence: (country: string) => boolean;
export declare const getCountryCode: (countryObj: Partial<Pick<Country, 'name' | 'dial_code'>>) => string | Error;
export declare const getCountryDialCode: (countryObj: Partial<Pick<Country, 'code' | 'name'>>) => string | Error;
export declare const getCountryName: (countryObj: Partial<Pick<Country, 'code' | 'dial_code'>>) => string | Error;
export declare const getCountryInfo: (countryObj: Partial<Omit<Country, 'continent'>>) => Country | Error;
export declare const verifyIfCountryInContinent: (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>, continent: Continent) => Country | Error;
export declare const getContinentOfCountry: (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>) => Continent | Error;
export declare const getCountriesOfContinent: (continent: Continent, limit?: number) => Country[] | Error;
export declare const getAllCountries: (limit?: number) => Country[];
export declare const sortCountries: (sortObj?: {
    data?: Country[];
    limit?: number;
}) => Country[] | Error;
