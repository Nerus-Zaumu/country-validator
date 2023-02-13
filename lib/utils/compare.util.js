"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.compareFunc = void 0;
const compareFunc = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
    return 1;
};
exports.compareFunc = compareFunc;
const capitalize = (word) => {
    if (!word || word.length === 0) {
        return undefined;
    }
    else {
        const splitWord = word.split('');
        const restWords = [...splitWord];
        restWords.shift();
        const firstChar = splitWord[0].toUpperCase();
        return [firstChar, ...restWords].join('');
    }
};
exports.capitalize = capitalize;
