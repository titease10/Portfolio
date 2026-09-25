import type { Project } from '../../types/Project';
import Poster_EIP from "../../assets/images/EIP_Poster.jpg";
import AREA_IFTTT from "../../assets/images/AREA_IFTTT.png";
import Computer_Analyse from "../../assets/images/code.png";
import Machine_Learning from "../../assets/images/Machine_Learning.png";

export const sampleProjects: Project[] = [
    {
        id: "Harmony_Havoc",
        title: "Harmony Havoc",
        description: "Un jeux-vidéo de rythme intégrant des aspects de Stratégie/RPG. \n" +
            "Ce jeu s’adresse à tous les joueurs recherchant une expérience alliant réflexes et tactiques.\n" +
            "\n" +
            "Vous incarnez une divinité dans un monde en 3D où l’environnement et l’action réagissent aux pulsations de la musique. Le principe est simple : enchaîner les commandes de rythme pour créer des combinaisons musicales puissantes. Ils vous permettent d’invoquer des unités, de lancer des sorts dévastateurs ou d’utiliser des armes uniques. \n" +
            "\n" +
            "Détruisez les bâtiments ennemis et affrontez des boss épiques à travers les niveaux pour faire évoluer votre arsenal.\n" +
            "\n" +
            "Le Jeu est actuellement disponible sur itch.io.",
        imageUrl: Poster_EIP,
        githubUrl: "https://harmonyhavoc.itch.io/harmonyhavoc",
        canvaUrl: "https://canva.link/p6zvkrnmyd5fa2h",
        technologies: ["Unity ", "WWise ", "C#"]
    },
    {
        id: "AREA",
        title: "AREA",
        description: "Création d’une suite logicielle qui fonctionne de manière similaire à IFTTT et/ou Zapier. (automatisation entre service)\n" +
            "\n" +
            "Cette suite logicielle est divisée en 3 parties :\n" +
            "Un serveur pour implémenter toutes les fonctionnalités.\n" +
            "Une application web pour utiliser l’application depuis un navigateur.\n" +
            "Une application mobile pour utiliser l’application depuis un téléphone.",
        imageUrl: AREA_IFTTT,
        githubUrl: "https://github.com/titease10/AREA_Project",
        canvaUrl: "https://canva.link/phwpj5m4hb4ynv2",
        technologies: ["React ", "TypeScripts ", " API"],
    },
    {
        id: "COMPUTER_NUMERICAL_ANALYSIS",
        title: "COMPUTER NUMERICAL ANALYSIS",
        description: "Divert project: graphique annalyse, cryptography, réseau neuronal",
        imageUrl: Computer_Analyse,
        githubUrl: "https://github.com/titease10/Computer_Numerical_Analysis_Maths",
        canvaUrl: "https://canva.link/ptptw430px5n8zz",
        technologies: ["C++ ", "Python "],
    },
    {
        id: "MACHINE_LEARNING",
        title: "MACHINE LEARNING",
        description: "creation du divert model d'IA : Classification , Regression, Clustering\n" +
            "objectif d’explorer et de comparer différentes approches d’apprentissage automatique à travers plusieurs problématiques concrètes.\n" +
            "\n" +
            "Le projet comprend quatre axes principaux :\n" +
            "Deep Learning sur MNIST : \n" +
            "entraînement d’un réseau de neurones et recherche de méthodes permettant d’atteindre une précision cible de 97 % tout en optimisant le temps d’apprentissage et d’inférence.\n" +
            "Classification — Détection de SMS indésirables (Spam) : \n" +
            "développement d’un modèle de classification permettant de distinguer automatiquement les SMS légitimes des messages indésirables (spam)." +
            " Le travail comprend l’analyse et le prétraitement des données, la comparaison de modèles et l’évaluation de leurs performances.\n" +
            "Régression — Consommation énergétique des entreprises :\n" +
            "utilisation de modèles de régression pour analyser et prédire la consommation énergétique d’entreprises." +
            " L’objectif est notamment d’exploiter les prédictions afin d’identifier des comportements ou consommations anormales.\n" +
            "Clustering — Analyse du niveau de vie des pays :\n" +
            "application de méthodes d’apprentissage non supervisé sur des données socio-économiques afin de regrouper " +
            "les pays présentant des caractéristiques similaires et d’identifier différents profils de niveau de vie.",
        imageUrl: Machine_Learning,
        githubUrl: "https://github.com/titease10/Machine-Learning-teck-5",
        canvaUrl: "https://canva.link/p9fhdc8zmzaay7x",
        technologies: ["Python "],
    }
];
