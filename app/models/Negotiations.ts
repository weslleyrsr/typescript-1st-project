import { Negotiation } from "./Negotiation";

export class Negotiations {
    private _negotiations: Array<Negotiation> = [];

    add(negotiation: Negotiation): void {
        this._negotiations.push(negotiation)
    }

    get negotiations(): ReadonlyArray<Negotiation> {
        return this._negotiations
    }

    get negotiationsHtml(): string {
        let list = this._negotiations.map(negotiation => {
            return `
            <div class="negotiation">
                <p> <span>Id:</span> ${negotiation.id} </p>
                <p> <span>Date:</span> ${negotiation.date.toLocaleDateString()} </p>
                <p> <span>Value:</span> ${negotiation.value} </p>
                <p> <span>Volume:</span> ${negotiation.volume} </p>
            </div>
            `
        })

        return list.join("");
    }
}