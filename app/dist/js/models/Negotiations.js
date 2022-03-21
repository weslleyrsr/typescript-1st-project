export class Negotiations {
    constructor() {
        this._negotiations = [];
    }
    add(negotiations) {
        this._negotiations = this._negotiations.concat(negotiations);
    }
    get list() {
        return this._negotiations;
    }
}
