export function Detective(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        console.log(`--- Method: ${propertyKey}`);
        console.log(`------ Parameters: ${JSON.stringify(args)}`);
        console.log(`--------- Return: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
