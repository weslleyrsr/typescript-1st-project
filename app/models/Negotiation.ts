export class Negotiation {
    private _id: number;

    constructor(private _date: Date, private _quantity: number, private _value: number) {
        this._id = new Date().getTime();
    }

    get id(): number {
        return this._id;
    }

    get date(): Date {
        return this._date;
    }

    get quantity(): number {
        return this._quantity;
    }

    get value(): number {
        return this._value;
    }

    get volume(): number {
        return this._value * this._quantity;
    }
}