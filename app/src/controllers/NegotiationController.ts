import { Negotiation } from "../models/Negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { NegotiationsView } from "../views/Negotiations-view.js";
import { MessageView } from "../views/Message-view.js";
import { ExecutionTimeLogger } from "../decorators/execution-time-logger.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations;
    private negotiationsView = new NegotiationsView("#negotiations");
    private messageView = new MessageView("#mensagemView");

    constructor() {
        this.inputDate = <HTMLInputElement> document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity") as HTMLInputElement;
        this.inputValue = document.querySelector("#value") as HTMLInputElement;
        this.negotiationsView.update(this.negotiations);
    }

    @ExecutionTimeLogger()
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
        return Negotiation.createFrom(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        );
    }

    private updateViews(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation successfully created!");
    }
}