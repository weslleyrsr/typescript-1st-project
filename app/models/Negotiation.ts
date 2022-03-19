export class Negotiation {
    private _id: number;

    /*
        As we declared our variables as private on the constructor parameters, we don't need to set each one of them inside the constructor
        Getters not needed because we declared our variables as readonly
    */

    constructor (
        private readonly date: Date,
        private readonly quantity: number,
        private readonly value: number
    ) {
        this._id = new Date().getTime();
    }

    get id(): number {
        return this._id;
    }

    get volume(): number {
        return this.value * this.quantity;
    }
}