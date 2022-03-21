import { WeekDays } from "../enums/week-days.js";
import { toString } from "../utils/toString.js";
export class Negotiation extends toString {
    constructor(_date, _quantity, _value) {
        super();
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
        this._id = new Date().getTime();
    }
    toString() {
        return `
            Date: ${this.date}
            Quantity: ${this.quantity}
            Value: ${this.value}
            Volume: ${this.volume}
        `;
    }
    static createFrom(dateString, quantityString, valueString) {
        let date = new Date(dateString.replace(/-/g, ","));
        this.validateDate(date);
        let quantity = parseInt(quantityString);
        let value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }
    static validateDate(date) {
        if (date.getDay() === WeekDays.SUNDAY || date.getDay() === WeekDays.SATURDAY) {
            throw new Error("Negotiations can only be created on business days");
        }
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get quantity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    get id() {
        return this._id;
    }
    get volume() {
        return this.value * this.quantity;
    }
}
