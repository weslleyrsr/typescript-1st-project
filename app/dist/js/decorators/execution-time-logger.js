export function ExecutionTimeLogger(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            if (inSeconds) {
                console.log(`${propertyKey}, Execution time - ${(t2 - t1) / 1000} seconds`);
            }
            else {
                console.log(`${propertyKey}, Execution time - ${(t2 - t1)} miliseconds`);
            }
            result;
        };
        return descriptor;
    };
}
