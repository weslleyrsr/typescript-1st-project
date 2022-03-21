import { View } from "./View.js";

export class MessageView extends View<string> {

    protected template(message: string, type: string): string {
        if (type === "error") {
            return `<p class="alert alert-danger">${message}</p>`
        } else {
            return `<p class="alert alert-info">${message}</p>`
        }
    }
}