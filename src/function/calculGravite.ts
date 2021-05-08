/**
 * Function calculant le centre de gravité du polygone
 * @author LesFunix
 * @param {Map<number, number[]>} coords
 * @param {number} aire
 * @returns {number[]}
 */
export default function calculGravite(coords: Map<number, number[]>, aire: number): number[] {
    let resX = 0, resY = 0;

    for (let i = 0; i < coords.size; i++) {
        let x = (coords.get(i))[0];
        let y = (coords.get(i))[1];

        let nextX = (coords.get(i + 1) || coords.get(0))[0];
        let nextY = (coords.get(i + 1) || coords.get(0))[1];

        resX += ((x + nextX) * (x * nextY - nextX * y));
        resY += ((y + nextY) * (x * nextY - nextX * y));
    }
    resX *= (1 / (6 * aire));
    resY *= (1 / (6 * aire));

    return [resX, resY];
}