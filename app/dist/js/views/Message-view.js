import { View } from "./View.js";
export class MessageView extends View {
    template(message, type) {
        if (type === "error") {
            return `<p class="alert alert-danger">${message}</p>`;
        }
        else {
            return `<p class="alert alert-info">${message}</p>`;
        }
    }
}
