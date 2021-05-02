export default function validateFileValues(values: string[]): number[] {

    let newSplited: number[] = [];
    for (const input of values) {
        if (input != '') {
            let d = parseFloat(input);
            if (Number.isNaN(d) || d === null) {
                console.error("Erreur dans votre fichier, toutes les valeurs ne sont pas lisibles.");
                return process.exit(1);
            }
            newSplited.push(d);
        }
    }
    return newSplited;

}