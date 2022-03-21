export function Escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            result.replace(
                /<script>[\s\S]*?<\/script>/,
                ""
            );
        }
        return result
    }

    return descriptor;
}