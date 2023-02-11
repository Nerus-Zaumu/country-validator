import { Country } from "./types";
export declare const verifyCountryExistence: (country: string) => boolean;
export declare const getCountryCode: (countryObj: Partial<Pick<Country, 'name' | 'dial_code'>>) => Country | "Country you are looking for does not exist";
export declare const getCountryDialCode: (countryObj: Partial<Pick<Country, 'code' | 'name'>>) => Country | "No country with the name and or code entered exists";
export declare const getCountryName: (countryObj: Partial<Pick<Country, 'code' | 'dial_code'>>) => Country | "Country you are looking for does not exist";
export declare const getCountryInfo: (countryObj: Partial<Country>) => void;
