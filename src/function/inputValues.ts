import fs from 'fs';
import chalk from "chalk";
import printCoords from './printCoords';
import validateFileValues from './validateFileValues';
import generateCoords from './generateCoords';
const { NumberPrompt } = require('enquirer');

/**
 * Function d'entrées des valeurs requises
 * Essaye de lire le fichier si indiqué lors de l'execution,
 * sinon demande à l'utilisateur de rentrer manuellement les valeurs
 * @author LesFunix
 * @returns {Map<number, number[]>}
 */
export default async function inputValues() {
    let file = process.argv[2];

    if (file) {
        let path = `${process.cwd()}/${file}`;
        let data: string;

        try {
            data = fs.readFileSync(path, 'utf8');
        } catch (err) {
            console.error("Erreur lors de l'ouverture du fichier. Veuillez régler le problème ou lancer le programme sans indiquer de fichier pour entrer manuellement les valeurs.");
            console.error(err);
            return process.exit(1);
        }

        let splited = data.split('\n');
        let values = validateFileValues(splited);

        if (values.length % 2 === 1) {
            let length = values.shift();
            if (length < 3) {
                console.error("Veuillez choisir un nombre de piquets supérieur ou égal à 3");
                return process.exit(1);
            }

            let coords: Map<number, number[]> = generateCoords(values);

            if (length != coords.size)
                console.warn(chalk.yellow(`⚠️ Le fichier indique ${length} piquets, mais seulement ${coords.size} ont des coordonnées. Le calcul continuera avec ${coords.size} piquets.\n`));

            printCoords(coords);

            return coords;
        } else {
            if ((values.length / 2) < 3) {
                console.error("Veuillez choisir un nombre de piquets supérieur ou égal à 3");
                return process.exit(1);
            }

            let coords: Map<number, number[]> = generateCoords(values);

            printCoords(coords);

            return coords;
        }
    } else {
        let nPrompt = new NumberPrompt({
            name: 'number',
            message: 'Veuillez saisir le nombre de piquets',
            result: async (value: number) => {
                if (value % 1 != 0)
                    return Math.floor(value);
            },
            validate: async (value: number) => {
                if (value < 3)
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
                    if (!value && value !== 0)
                        return "Veuillez entrer une valeur numérique correcte";
                    return true;
                }
            });
            const yPrompt = new NumberPrompt({
                name: 'number',
                message: 'y',
                validate: (value: number) => {
                    if (!value && value !== 0)
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
}