export function humanizeFieldName(str: string) {
    // Insert a space before uppercase letters, then capitalize the first letter
    const result = str
        .replace(/([A-Z])/g, " $1")   // firstName -> first Name
        .replace(/^./, (s) => s.toUpperCase()); // capitalize first letter
    return result;
}