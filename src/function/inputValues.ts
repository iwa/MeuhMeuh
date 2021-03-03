import chalk from "chalk";
const { NumberPrompt } = require('enquirer');

export default async function inputValues() {
    const nPrompt = new NumberPrompt({
        name: 'number',
        message: 'Veuillez saisir le nombre de piquets'
    });
    const n = await nPrompt.run().catch(console.error);

    let coords: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) {
        console.log(chalk.bold(`Saisir le piquet ${i} :`));

        const xPrompt = new NumberPrompt({
            name: 'number',
            message: 'x'
        });
        const yPrompt = new NumberPrompt({
            name: 'number',
            message: 'y'
        });

        const x = await xPrompt.run().catch(console.error);
        const y = await yPrompt.run().catch(console.error);

        coords.set(i, [x, y]);
    }

    return coords;
}