import { Negotiations } from "../models/Negotiations";
import { View } from "./View.js";

export class NegotiationsView extends View<Negotiations> {

    protected template(negotiations: Negotiations): string {
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
                        negotiations.list.map(negotiation => {
                            return `
                                <tr>
                                    <td>${this.dateParser(negotiation.date)}</td>
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

    private dateParser(date: Date): string {
        return date.toLocaleDateString();
    }
}