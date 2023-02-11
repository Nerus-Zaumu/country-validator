# what is this

Get basic information about nations such as their name, dial code and country code
Do all this without having to download some huge list of countries

# installation

`npm install nation-validator --save`

Then...

---
    import { verifyCountryExistence, getCountryCode, getCountryName, getCountryDialCode, getCountryInfo } from 'nation-validator';

    verifyCountryExistence(country: string) : returns a boolean

    getCountryCode({name?: string, dial_code?: string}) : returns a country code if found else error message

    getCountryName({dial_code?: string, code?: string}) : returns a country name

    getCountryDialCode({code?: string, name: string }) : returns a country dial code

    getCountryInfo({name?: string, code?: string, dial_code?: string}) : returns a country object or errors out
---