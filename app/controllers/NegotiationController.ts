import { Negotiation } from "../models/Negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { NegotiationsView } from "../views/Negotiations-view.js";
import { MessageView } from "../views/Message-view.js";
import { WeekDays } from "../enums/week-days.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations;
    private negotiationsView = new NegotiationsView("#negotiations");
    private messageView = new MessageView("#mensagemView");

    constructor() {
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.negotiationsView.update(this.negotiations);
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

    add(): void {
        try {
            this.negotiations.add(
                this.createNegotiation()
            );
            this.resetForm();
            this.updateViews();
        } catch (error) {
            this.messageView.update(error, "error");
        }
    }

    private resetForm(): void {
        this.inputDate.value = "";
        this.inputQuantity.value = "1";
        this.inputValue.value = "0.0";
        this.inputDate.focus();
    }

    private createNegotiation(): Negotiation {
        // if (this.weekend.includes(this.date.getDay())) throw new Error("Negotiations can only be created on business days");
        this.validateDate(this.date);

        return new Negotiation(
            this.date,
            this.quantity,
            this.value
        );
    }

    private validateDate(date: Date): void {
        if (date.getDay() === WeekDays.SUNDAY || date.getDay() === WeekDays.SATURDAY) {
            throw new Error("Negotiations can only be created on business days");
        }
    }

    private updateViews(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation successfully created!");
    }
}