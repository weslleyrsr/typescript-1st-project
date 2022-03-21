export function DomInjector(selector: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        // console.log(`Searching DOM element with ${selector} selector`);
        const element = <HTMLElement> document.querySelector(selector);

        // console.log(`Modifying prototype ${target.constructor.name}, adding property ${propertyKey} as a getter`);
        Object.defineProperty(
            target,
            propertyKey,
            {
                get: function() {
                    return element;
                }
            }
        );
    }
}