# 🐮 MeuhMeuh

MeuhMeuh est un programme de calcul developpé en TypeScript.

Projet créé par **Les Funix**.

## 🛬 Installation

1. Veillez d'abord à installer [NodeJS](https://nodejs.org/en/) (v14 minimum)

|[Windows](https://nodejs.org/en/download/)| [MacOS](https://nodejs.org/en/download/) | [Debian & Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions) | [Autres OS](https://nodejs.org/en/download/package-manager/)
| :-: | :-: | :-: | :-: |

2. Installer [les dépendances système de cette libraire](https://github.com/Automattic/node-canvas#compiling) en fonction de votre OS
3. Executer cette commande dans le dossier courant du projet :

```bash
npm i
```

---
**Pourquoi une installation si fastidieuse ?**

Nous avons d'abord développé le projet en utilisant la dépendence `pkg`, nous permettant de générer des executables pour chaque OS, rendant plus simple l'execution du projet.

Malheureusement, dans un soucis d'amélioration du projet, nous avons du supprimer cette dépendance en vu de l'utilisation de `canvas`, une librairie nous permettant de générer facilement des visuels sous forme d'image. La seule contrainte étant que la librairie doit être compilée directement sur la machine, il n'existe pas de version pré-compilée fonctionnelle.

Nous nous excusons pour la gêne que cela à pu potentiellement vous occasionner, mais nous tenions réellement à faire cet ajout à notre projet.

## ⌨️ Utilisation

```bash
npm start
```

Vous pouvez également indiquer un fichier contenant les valeurs requises :
```bash
npm start tests/test1.txt
```

## 🗄 Formats de fichiers supportés

Pour que vos fichiers soient lus correctement, ils doivent être formattés de la manière suivante :
- Une valeur par ligne
- La première valeur (première ligne) corresponds au nombre de piquets *(non obligatoire)*
- Ensuite, entrez les coordonnées d'abscisse puis d'ordonnée de chaque point à la suite

**Exemple :**
- 3 Piquets : (1 ; 2)(3 ; 4)(2 ; 1)
```
3
1
2
3
4
2
1
```

## 📄 Licence

À la suite de l'évaluation, le projet sera public et open-source sous la licence [MIT](https://choosealicense.com/licenses/mit/).