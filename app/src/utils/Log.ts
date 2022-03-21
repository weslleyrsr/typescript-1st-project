import { toString } from "./toString";

export function Log(...items: toString[]): void {
    items.forEach(item => {
        console.log(item.toString());
    })
}