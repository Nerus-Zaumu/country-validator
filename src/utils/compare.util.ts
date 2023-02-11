import { Country } from './../../lib/types.d';
export const compareFunc = (a: Country, b: Country) => {
    if(a.name < b.name) {
        return -1
    }
    if(a.name === b.name) {
        return 0
    }
    return 1
}