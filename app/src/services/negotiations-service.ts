import { DailyNegotiations } from "../interfaces/daily-negotiations.js";
import { Negotiation } from "../models/Negotiation.js";

export class NegotiationsService {
    public static async getDailyNegotiations(): Promise<Negotiation[]> {
        let response: DailyNegotiations[] = await fetch("http://localhost:8080/dados").then(res => res.json());

        return response.map(negotiation => {
            return new Negotiation(
                new Date,
                negotiation.vezes,
                negotiation.montante
            )
        })
    }
}