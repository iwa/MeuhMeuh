import chalk from 'chalk';
const cowsay = require('cowsay2');

import appartenancePoint from './function/appartenancePoint';
import calculAire from './function/calculAire';
import calculGravite from './function/calculGravite';
import inputValues from './function/inputValues';

console.log(chalk.bold(chalk.green(" --- MeuhMeuh --- ")));

(async () => {
    let coords = await inputValues();
    let aire = calculAire(coords);
    let pointG = calculGravite(coords, aire);
    let isIn = appartenancePoint(coords, pointG);

    console.log(chalk.whiteBright("\n --- Résultats ---"));
    console.log(`Aire : ${aire}`);
    console.log(`Centre de gravité : (${pointG[0]}, ${pointG[1]})`);

    if(isIn) {
        console.log(chalk.bold(chalk.greenBright("✔ La vache est dans le pré")));
        console.log(chalk.gray(cowsay.say("Meuh Meuh !")));
    } else {
        console.log(chalk.bold(chalk.redBright("× La vache est hors du pré")));
        console.log(chalk.gray(cowsay.think("On m'a abandonnée... :'(")));
    }
})();