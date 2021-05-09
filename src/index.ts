import chalk from 'chalk';
const cowsay = require('cowsay2');

import appartenancePoint from './function/appartenancePoint';
import calculAire from './function/calculAire';
import calculCentreGravite from './function/calculCentreGravite';
import generateMapImage from './function/generateMapImage';
import inputValues from './function/inputValues';

/**
 * Main-like function
 * @author LesFunix
 */
(async () => {
    console.log(chalk.bold(chalk.green(" --- MeuhMeuh --- ")));

    let coords = await inputValues();
    let aire = calculAire(coords);
    let pointG = calculCentreGravite(coords, aire);
    let isIn = appartenancePoint(coords, pointG);

    console.log(chalk.whiteBright("\n --- Résultats ---"));
    console.log(`Aire : ${aire}`);

    if (aire === 0) {
        console.error(chalk.bold(chalk.red("Erreur: aire nulle, impossible de calculer le centre de gravité")));
        process.exit(1);
    }

    console.log(`Centre de gravité : (${pointG[0]}, ${pointG[1]})`);

    if (isIn) {
        console.log(chalk.bold(chalk.greenBright("✔ La vache est dans le pré")));
        console.log(chalk.gray(cowsay.say("Meuh Meuh !")));
    } else {
        console.log(chalk.bold(chalk.redBright("× La vache est hors du pré")));
        console.log(chalk.gray(cowsay.think("On m'a abandonnée... :'(")));
    }

    try {
        generateMapImage(coords, pointG);
    } catch (err) {
        console.error(chalk.grey("Erreur lors de la génération du visuel. Vérifiez bien que vous avez installé toutes les dépendances requises indiquées dans le README."));
    }
})();