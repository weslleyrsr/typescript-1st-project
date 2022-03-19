import { Negotiation } from "../models/Negotiation.js";
import { Negotiations } from "../models/Negotiations.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;

    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }

    get date(): Date {
        return new Date(
            this.inputDate.value.replace(/-/g, ",")
        );
    }

    get quantity(): number {
        return parseInt(this.inputQuantity.value);
    }

    get value(): number {
        return parseFloat(this.inputValue.value);
    }

    resetForm(): void {
        this.inputDate.value = "";
        this.inputQuantity.value = "1";
        this.inputValue.value = "0.0";
        this.inputDate.focus();
    }

    add(negotiations: Negotiations): void {
        negotiations.add(this.createNegotiation());
        this.resetForm();
    }

    createNegotiation(): Negotiation {
        return new Negotiation(
            this.date,
            this.quantity,
            this.value
        );
    }
}