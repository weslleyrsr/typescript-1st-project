import { Negotiation } from "./Negotiation";

export class Negotiations {
    /*
        Simplified version of Array and generics syntax
            > private _negotiations: Array<Negotiation> = [];
            > private _negotiations: Negotiation[] = [];
    */
    private _negotiations: Negotiation[] = [];

    add(negotiations: Negotiation[]): void {
        this._negotiations = this._negotiations.concat(negotiations)
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