// This wrapper is only needed if you want to pass parameters to the decorator
export function ExecutionTimeLogger(inSeconds = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            if (inSeconds) {
                console.log(`${propertyKey}, Execution time - ${(t2 - t1) / 1000 } seconds`);
            } else {
                console.log(`${propertyKey}, Execution time - ${(t2 - t1)} miliseconds`);
            }
            result
        };

        return descriptor;
    }
}