/**
 * Récupère les coordonnées lues et vérifiées d'un fichier et les instancient
 * dans une HashMap pour simplifier leur gestion
 * @author LesFunix
 * @param {number[]} values
 * @returns {Map<number, number[]>}
 */
export default function generateCoords(values: number[]): Map<number, number[]> {

    let coords: Map<number, number[]> = new Map();
    let j = 0;
    for (let i = 0; i < values.length; i += 2) {
        coords.set(j, [values[i], values[i + 1]]);
        j += 1;
    }
    return coords;

}