import { NegotiationController } from "./controllers/NegotiationController.js";
const controller = new NegotiationController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw new Error("Form not found, app can't be initiated!");
}
