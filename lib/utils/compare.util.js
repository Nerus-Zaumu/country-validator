"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareFunc = void 0;
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
