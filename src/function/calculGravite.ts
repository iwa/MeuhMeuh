export default function calculGravite(coords: Map<number, number[]>, aire: number) {
    let resX = 0, resY = 0;

    // G_x
    for (let i = 0; i < coords.size; i++) {
        let x = (coords.get(i))[0];
        let y = (coords.get(i))[1];

        let x1 = (coords.get(i+1) || coords.get(0))[0];
        let y1 = (coords.get(i+1) || coords.get(0))[1];

        resX += ((x + x1) * (x * y1 - x1 * y));
    }
    resX *= (1/(6*aire));

    // G_y
    for (let i = 0; i < coords.size; i++) {
        let x = (coords.get(i))[0];
        let y = (coords.get(i))[1];

        let x1 = (coords.get(i+1) || coords.get(0))[0];
        let y1 = (coords.get(i+1) || coords.get(0))[1];

        resY += ((y + y1) * (x * y1 - x1 * y));
    }
    resY *= (1/(6*aire));

    return [resX, resY];
}