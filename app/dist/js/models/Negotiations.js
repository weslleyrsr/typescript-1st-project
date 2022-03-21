export class Negotiations {
    constructor() {
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
