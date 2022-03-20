import { Negotiations } from "../models/Negotiations";

export class NegotiationsView {

    private element: HTMLElement;
    private negotiations: Negotiations;

    constructor(selector: string, negotiations: Negotiations) {
        this.element = document.querySelector(selector);
        this.negotiations = negotiations;
    }

    template(): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>VALUE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${
                        this.negotiations.list.map(negotiation => {
                            return `
                                <tr>
                                    <td>${negotiation.date.toLocaleDateString()}</td>
                                    <td>${negotiation.quantity}</td>
                                    <td>${negotiation.value}</td>
                                    <td>${negotiation.volume}</td>
                                </tr>
                            `
                        }).join("")
                    }
                </tbody>
            </table>
        `;
    }

    update(): void {
        this.element.innerHTML = this.template();
    }
}