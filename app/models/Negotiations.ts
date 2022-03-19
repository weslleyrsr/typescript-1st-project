import { Negotiation } from "./Negotiation";

export class Negotiations {
    /*
        Simplified version of Array and generics syntax
            > private _negotiations: Array<Negotiation> = [];
            > private _negotiations: Negotiation[] = [];
    */
    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation): void {
        this._negotiations.push(negotiation)
    }

    /*
        Simplified version of ReadonlyArray syntax
            > get negotiations(): ReadonlyArray<Negotiation> {
            > get negotiations(): readonly Negotiation[] {
    */
    get negotiations(): readonly Negotiation[] {
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