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
    get list(): readonly Negotiation[] {
        return this._negotiations
    }
}