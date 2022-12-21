"use strict";

import pokemonGenerator from './Classes/pokemonGenerator.ts';

const pokemonGen = new pokemonGenerator();

const Pikachu = pokemonGen.newPikachu(
    "Appelkoekje", 
);


const Charmeleon = pokemonGen.newCharmeleon(
    "Opa Wouter", 
);


pokemonGen.fight(Pikachu, Charmeleon);

console.log("er zijn nu " + pokemonGen.getPopulation() + " pokemon in leven");

console.log(`\n${Charmeleon.getNickname()}(${Charmeleon.getName()}) wordt nu vermoord`);

Charmeleon.setHitpoints(0);

pokemonGen.setAlivePokemon(1);

console.log("er zijn nu " + pokemonGen.getPopulation() + " pokemon in leven");