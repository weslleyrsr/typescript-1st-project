import { NegotiationController } from "./controllers/NegotiationController.js";
const controller = new NegotiationController();
const form = document.querySelector(".form");
const importButton = document.querySelector("#import-button");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw new Error("Form not found, app can't be initiated!");
}
if (importButton) {
    importButton.addEventListener("click", event => {
        event.preventDefault();
        controller.importData();
    });
}
else {
    throw new Error("Import button not found, app can't be initiated!");
}
