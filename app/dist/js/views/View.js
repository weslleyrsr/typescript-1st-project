export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw new Error(`Selector ${selector} not found!`);
        }
    }
    update(model, type) {
        this.element.innerHTML = this.template(model, type);
    }
}
