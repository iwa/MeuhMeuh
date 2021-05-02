export default async function printCoords(coords: Map<number, number[]>) {

    let n = coords.size;

    console.log(`Piquets : ${n}`);

    for (let i = 0; i < coords.size; i++)
        console.log(`${i + 1} - (${coords.get(i)[0]} ; ${coords.get(i)[1]})`);

}