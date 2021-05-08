export default function round(value: number, precision: number) {
    let multiplier = Math.pow(10, precision || 0);

    if (value >= 0)
        return Math.round(value * multiplier) / multiplier;
    else
        return Math.ceil(value * multiplier) / multiplier;
}