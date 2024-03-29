/**
 * Function calculant l'air du polygone formé par les piquets
 * @author LesFunix
 * @param {Map<number, number[]>} coords
 * @returns {number}
 */
export default function calculAire(coords: Map<number, number[]>): number {
    let res = 0;

    for (let i = 0; i < coords.size; i++) {
        let x = (coords.get(i))[0];
        let y = (coords.get(i))[1];

        let nextX = (coords.get(i + 1) || coords.get(0))[0];
        let nextY = (coords.get(i + 1) || coords.get(0))[1];

        res += (x * nextY - nextX * y);
    }

    res *= (1 / 2);

    if (res < 0)
        res *= -1;

    return res;
}