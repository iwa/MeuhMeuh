/**
 * Function verifiant l'appartenance d'un point à un polygone
 * @author LesFunix
 * @param {Map<number, number[]>} coords
 * @param {number[]} point
 * @returns {boolean}
 */
export default function appartenancePoint(coords: Map<number, number[]>, point: number[]): boolean {
    let sum = 0;

    for (let i = 0; i < coords.size; i++) {
        let x = (coords.get(i))[0];
        let y = (coords.get(i))[1];

        let nextX = (coords.get(i + 1) || coords.get(0))[0];
        let nextY = (coords.get(i + 1) || coords.get(0))[1];

        let GSi = [x - point[0], y - point[1]];
        let GSi1 = [nextX - point[0], nextY - point[1]];

        let thetaI = Math.acos((GSi[0] * GSi1[0] + GSi[1] * GSi1[1]) / (Math.sqrt(Math.pow(GSi[0], 2) + Math.pow(GSi[1], 2)) * Math.sqrt(Math.pow(GSi1[0], 2) + Math.pow(GSi1[1], 2))));
        let det = x * nextY - y * nextX;

        if (thetaI < 0 && det > 0)
            thetaI *= -1;

        if (thetaI > 0 && det < 0)
            thetaI *= -1;

        sum += thetaI;
    }

    sum = Math.round(sum);
    if (sum === 0)
        return false;
    return true;
}