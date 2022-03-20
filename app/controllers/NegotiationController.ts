import { Negotiation } from "../models/Negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { NegotiationsView } from "../views/Negotiations-view.js";


export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations;
    private negotiationsView = new NegotiationsView("#negotiations", this.negotiations);

    constructor() {
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.negotiationsView.update();
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

    add(): void {
        this.negotiations.add(this.createNegotiation());
        this.resetForm();
        this.negotiationsView.update();
    }

    createNegotiation(): Negotiation {
        return new Negotiation(
            this.date,
            this.quantity,
            this.value
        );
    }
}