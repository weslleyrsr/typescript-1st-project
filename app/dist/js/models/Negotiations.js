export class Negotiations {
    constructor() {
        this._negotiations = [];
    }
    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    get list() {
        return this._negotiations;
    }
}
