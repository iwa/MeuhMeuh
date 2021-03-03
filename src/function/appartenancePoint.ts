export default function appartenancePoint(coords: Map<number, number[]>, pointG: number[]) {
    let sum = 0;

    for (let i = 0; i < coords.size; i++) {
        let x = (coords.get(i))[0];
        let y = (coords.get(i))[1];

        let x1 = (coords.get(i+1) || coords.get(0))[0];
        let y1 = (coords.get(i+1) || coords.get(0))[1];

        let GSi = [x - pointG[0], y - pointG[1]];
        let GSi1 = [x1 - pointG[0], y1 - pointG[1]];

        let thetaI = Math.acos((GSi[0] * GSi1[0] + GSi[1] * GSi1[1]) / (Math.sqrt(Math.pow(GSi[0], 2) + Math.pow(GSi[1], 2)) * Math.sqrt(Math.pow(GSi1[0], 2) + Math.pow(GSi1[1], 2))));

        sum += thetaI;
    }

    if (sum === (2 * Math.PI))
        return true;
    return false;
}