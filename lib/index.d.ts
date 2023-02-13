import { Continent, Country } from "./utils/types";
export declare const verifyCountryExistence: (country: string) => boolean;
export declare const getCountryCode: (countryObj: Partial<Pick<Country, 'name' | 'dial_code'>>) => {};
export declare const getCountryDialCode: (countryObj: Partial<Pick<Country, 'code' | 'name'>>) => {};
export declare const getCountryName: (countryObj: Partial<Pick<Country, 'code' | 'dial_code'>>) => {};
export declare const getCountryInfo: (countryObj: Partial<Omit<Country, 'continent'>>) => {};
export declare const verifyIfCountryInContinent: (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>, continent: Continent) => {};
export declare const getContinentOfCountry: (countryObj: Partial<Pick<Country, 'name' | 'dial_code' | 'code'>>) => {};
export declare const getCountriesOfContinent: (continent: Continent, limit?: number) => {};
export declare const getAllCountries: (limit?: number) => {};
export declare const sortCountries: (sortObj?: {
    data?: Country[];
    limit?: number;
}) => {};
