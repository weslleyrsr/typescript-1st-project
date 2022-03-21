export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string) {
        this.element = <HTMLInputElement> document.querySelector(selector);
    }

    protected abstract template(model: T, type?: string): string;

    update(model: T, type?: string): void {
        this.element.innerHTML = this.template(model, type);
    }
}