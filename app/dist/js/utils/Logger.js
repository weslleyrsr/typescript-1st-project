export function Log(...items) {
    items.forEach(item => {
        console.log(item.toString());
    });
}
