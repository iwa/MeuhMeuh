import fs from 'fs';
import { createCanvas } from 'canvas';

/**
 * Function générant une image représentant le polygone formé par
 * les piquets ainsi que son centre de gravité
 * @author LesFunix
 * @param {Map<number, number[]>} coords
 * @param {number[]} pointG
 */
export default function generateMapImage(coords: Map<number, number[]>, pointG: number[]) {
    for (const value of coords) {
        value[1][0] *= 10;
        value[1][1] *= 10;
    }
    pointG[0] *= 10; pointG[1] *= 10;

    let xMin = 0, yMin = 0;
    let xMax = coords.get(0)[0], yMax = coords.get(0)[1];
    for (const value of coords) {
        if (value[1][0] < 0 && value[1][0] < xMin)
            xMin = value[1][0];

        if (value[1][1] < 0 && value[1][1] < yMin)
            yMin = value[1][1];

        if (value[1][0] > xMax)
            xMax = value[1][0];

        if (value[1][1] > yMax)
            yMax = value[1][1];
    }

    let xMargin = (xMin * -1 + 10), yMargin = (yMin * -1 + 10);
    if (xMargin !== 0) {
        for (const value of coords) {
            value[1][0] += xMargin;
        }
        pointG[0] += xMargin;
    }

    if (yMargin !== 0) {
        for (const value of coords) {
            value[1][1] += yMargin;
        }
        pointG[1] += yMargin;
    }

    let width = 0;
    if (xMin < 0)
        width = xMax + xMargin + 10;
    else
        width = xMin + xMax + (xMargin * 2);

    let height = 0;
    if (xMin < 0)
        height = yMax + yMargin + 10;
    else
        height = yMin + yMax + (yMargin * 2);

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 1000, 1000);

    // forme
    ctx.beginPath();
    ctx.moveTo(coords.get(0)[0], coords.get(0)[1]);

    for (let i = 1; i < coords.size; i++) {
        ctx.lineTo(coords.get(i)[0], coords.get(i)[1]);
    }

    ctx.lineTo(coords.get(0)[0], coords.get(0)[1]);
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // pointG
    ctx.beginPath();
    ctx.arc(pointG[0], pointG[1], 4, 0, Math.PI * 2, true);
    ctx.fillStyle = "#FF4444";
    ctx.fill();

    let buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./output.png', buffer);
}
