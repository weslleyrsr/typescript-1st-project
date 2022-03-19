import { NegotiationController } from "./controllers/NegotiationController.js";
import { Negotiations } from "./models/Negotiations.js";

const controller = new NegotiationController();
const form = document.querySelector(".form");
const negotiationsWrapper = document.querySelector("#negotiations");

form.addEventListener("submit", event => {
    event.preventDefault();
    controller.add();
    renderNegotiations();
});

function renderNegotiations(): void {
    negotiationsWrapper.innerHTML = controller.negotiationsHtml;
}