export function removeLastCharIfExist(str: string, char: string): string {
    return str && char && str.charAt(str.length - 1) === char
        ? str.slice(0, -1)
        : str;
}

export function removeFirstCharIfExist(str: string, char: string): string {
    return str && char && str.charAt(0) === char
        ? str.slice(1)
        : str;
}
