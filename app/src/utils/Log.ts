import { toString } from "../interfaces/toString";

export function Log(...items: toString[]): void {
    items.forEach(item => {
        console.log(item.toString());
    })
}