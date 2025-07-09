export function formatMessage(message: string): string {
    return message.trim().replace(/\s+/g, ' ');
}

export function validateMessage(message: string): boolean {
    const isValid = message.length > 0 && message.length <= 200;
    return isValid;
}