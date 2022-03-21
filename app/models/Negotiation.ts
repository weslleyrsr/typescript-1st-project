import { WeekDays } from "../enums/week-days.js";

export class Negotiation {
    private _id: number;

    /*
        As we declared our variables as private on the constructor parameters, we don't need to set each one of them inside the constructor
        Getters not needed because we declared our variables as readonly

        constructor (
            private readonly date: Date,
            private readonly quantity: number,
            private readonly value: number
        ) {
            this._id = new Date().getTime();
        }
    */

    constructor (
        private _date: Date,
        private _quantity: number,
        private _value: number
    ) {
        this._id = new Date().getTime();
    }

    get date(): Date {
        return new Date(this._date.getTime());
    }

    get quantity(): number {
        return this._quantity;
    }

    get value(): number {
        return this._value;
    }

    get id(): number {
        return this._id;
    }

    get volume(): number {
        return this.value * this.quantity;
    }

    public static createFrom(dateString: string, quantityString: string, valueString: string) {
        let date = new Date( dateString.replace(/-/g, ",") );
        this.validateDate(date);
        let quantity = parseInt(quantityString);
        let value = parseFloat(valueString);
        return new Negotiation(date, quantity, value)
    }

    private static validateDate(date: Date): void {
        if (date.getDay() === WeekDays.SUNDAY || date.getDay() === WeekDays.SATURDAY) {
            throw new Error("Negotiations can only be created on business days");
        }
    }
}