import { Detective } from "../decorators/detective.js";
import { ExecutionTimeLogger } from "../decorators/execution-time-logger.js";

export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string) {
        const element = document.querySelector(selector);
        if(element) {
            this.element = element as HTMLElement;
        } else {
            throw new Error(`Selector ${selector} not found!`)
        }
    }

    protected abstract template(model: T, type?: string): string;

    @ExecutionTimeLogger(true)
    @Detective
    update(model: T, type?: string): void {
        this.element.innerHTML = this.template(model, type);
    }
}