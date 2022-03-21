import { toString } from "../utils/toString.js";
export class Negotiations extends toString {
    constructor() {
        super(...arguments);
        this._negotiations = [];
    }
    toString() {
        return JSON.stringify(this.list, null, 2);
    }
    add(negotiations) {
        this._negotiations = this._negotiations.concat(negotiations);
    }
    get list() {
        return this._negotiations;
    }
}
