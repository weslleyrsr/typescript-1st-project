export function Escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            result.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return result;
    };
    return descriptor;
}
