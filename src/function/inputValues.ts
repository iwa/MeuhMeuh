import chalk from "chalk";
const { NumberPrompt } = require('enquirer');

export default async function inputValues() {
    let nPrompt = new NumberPrompt({
        name: 'number',
        message: 'Veuillez saisir le nombre de piquets',
        result: async (value: number) => {
            if(value % 1 != 0)
                return Math.floor(value);
        },
        validate: async (value: number) => {
            if(value < 3)
                return "Veuillez choisir un nombre de piquets supérieur ou égal à 3";
            return true;
        }
    });
    let n = await nPrompt.run().catch(console.error);

    if (!n) {
        console.error(chalk.bold(chalk.red("Erreur: veuillez entrer une valeur numérique correcte")));
        process.exit(1);
    }

    if (n < 3) {
        console.error(chalk.bold(chalk.red("Erreur: veuillez choisir un nombre supérieur ou égal à 3")))
        process.exit(1);
    }

    let coords: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) {
        console.log(chalk.bold(`Saisir le piquet ${i} :`));

        const xPrompt = new NumberPrompt({
            name: 'number',
            message: 'x',
            validate: (value: number) => {
                if(!value && value !== 0)
                    return "Veuillez entrer une valeur numérique correcte";
                return true;
            }
        });
        const yPrompt = new NumberPrompt({
            name: 'number',
            message: 'y',
            validate: (value: number) => {
                if(!value && value !== 0)
                    return "Veuillez entrer une valeur numérique correcte";
                return true;
            }
        });

        const x = await xPrompt.run().catch(console.error);
        if (!x && x !== 0) {
            console.error(chalk.bold(chalk.red("Erreur: veuillez entrer une valeur numérique correcte")));
            process.exit(1);
        }

        const y = await yPrompt.run().catch(console.error);
        if (!y && y !== 0) {
            console.error(chalk.bold(chalk.red("Erreur: veuillez entrer une valeur numérique correcte")));
            process.exit(1);
        }

        coords.set(i, [x, y]);
    }

    return coords;
}