export function DomInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Searching DOM element with ${selector} selector`);
        const element = document.querySelector(selector);
        console.log(`Modifying prototype ${target.constructor.name}, adding property ${propertyKey} as a getter`);
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return element;
            }
        });
    };
}
