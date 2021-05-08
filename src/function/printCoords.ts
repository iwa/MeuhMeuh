/**
 * Function affichant les coordonnées de chaque piquet
 * @author LesFunix
 * @param {Map<number, number[]>} coords
 */
export default async function printCoords(coords: Map<number, number[]>) {

    let nombrePiquets = coords.size;

    console.log(`Piquets : ${nombrePiquets}`);

    for (let i = 0; i < nombrePiquets; i++)
        console.log(`${i + 1} - (${coords.get(i)[0]} ; ${coords.get(i)[1]})`);

}