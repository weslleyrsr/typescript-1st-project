export function ExecutionTimeLogger() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, Execution time - ${(t2 - t1) / 1000}`);
            result;
        };
        return descriptor;
    };
}
