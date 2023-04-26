export function setHours(value: any) {
    if (value) {
        const date = new Date(Date.parse(value));
        date.setHours(date.getHours() + 7)

        return date.toISOString()
    }

    return undefined
}