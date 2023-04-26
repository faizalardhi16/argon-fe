export function setHours(value: string) {
    const date = new Date(Date.parse(value));
    date.setHours(date.getHours() + 7)

    return date.toISOString()
}