import type { Project } from '../../types/Project';
import Poster_EIP from "../../assets/images/EIP_Poster.png";
import AREA_IFTTT from "../../assets/images/AREA_IFTTT.png";
import Computer_Analyse from "../../assets/images/code.png";
import Machine_Learning from "../../assets/images/Machine_Learning.png";

export const sampleProjects: Project[] = [
    {
        id: "1",
        title: "Harmony Havoc",
        description: "Un jeux-vidéo de rythme intégrant des aspects de Stratégie/RPG. Le Jeu est actuellement disponible sur itch.io",
        imageUrl: Poster_EIP,
        githubUrl: "https://harmonyhavoc.itch.io/harmonyhavoc",
        canvaUrl: "https://canva.link/p6zvkrnmyd5fa2h",
        technologies: ["Unity ", "WWise ", "C#"]
    },
    {
        id: "2",
        title: "AREA",
        description: "Le projet AREA consiste en la création d’une suite logicielle qui fonctionne de manière similaire à IFTTT et/ou Zapier. (automatisation entre service)\n" +
            "Cette suite logicielle est divisée en 3 parties :\n" +
            "\n" +
            "Un serveur pour implémenter toutes les fonctionnalités.\n" +
            "Une application web pour utiliser l’application depuis un navigateur.\n" +
            "Une application mobile pour utiliser l’application depuis un téléphone.",
        imageUrl: AREA_IFTTT,
        githubUrl: "https://github.com/titease10/AREA_Project",
        canvaUrl: "https://canva.link/phwpj5m4hb4ynv2",
        technologies: ["React ", "TypeScripts ", " API"],
    },
    {
        id: "3",
        title: "COMPUTER NUMERICAL ANALYSIS",
        description: "Divert project: graphique annalyse, cryptography,\n" +
            "réseau neuronal",
        imageUrl: Computer_Analyse,
        githubUrl: "https://github.com/titease10/Computer_Numerical_Analysis_Maths",
        canvaUrl: "https://canva.link/ptptw430px5n8zz",
        technologies: ["C++ ", "Python "],
    },
    {
        id: "4",
        title: "MACHINE LEARNING",
        description: "creation du divert model d'IA : Classification , Regression, Clustering\n",
        imageUrl: Machine_Learning,
        githubUrl: "https://github.com/titease10/Machine-Learning-teck-5",
        canvaUrl: "https://canva.link/p9fhdc8zmzaay7x",
        technologies: ["Python "],
    }
];
