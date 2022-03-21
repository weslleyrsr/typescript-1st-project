import { View } from "./View.js";
export class NegotiationsView extends View {
    template(negotiations) {
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
                    ${negotiations.list.map(negotiation => {
            return `
                                <tr>
                                    <td>${this.dateParser(negotiation.date)}</td>
                                    <td>${negotiation.quantity}</td>
                                    <td>${negotiation.value}</td>
                                    <td>${negotiation.volume}</td>
                                </tr>
                            `;
        }).join("")}
                </tbody>
            </table>
        `;
    }
    dateParser(date) {
        return date.toLocaleDateString();
    }
}
