import { toString } from "../interfaces/toString.js";
import { Negotiation } from "./Negotiation.js";

export class Negotiations implements toString {
    /*
        Simplified version of Array and generics syntax
            > private _negotiations: Array<Negotiation> = [];
            > private _negotiations: Negotiation[] = [];
    */
    private _negotiations: Negotiation[] = [];

    public toString(): string {
        return JSON.stringify(this.list, null, 2);
    }

    add(negotiations: Negotiation[]): void {
        this._negotiations = this._negotiations.concat(negotiations)
    }

    include(negotiation: Negotiation): boolean {
        return this._negotiations.some(item => {
            return item.id === negotiation.id
        });
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