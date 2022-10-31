"use strict";

import pokemonGenerator from './Classes/pokemonGenerator.ts';

const pokemonGen = new pokemonGenerator();

const Pikachu = pokemonGen.newPokemon(
    "Pikachu", 
    "Appelkoekje", 
    "Lightning", 
    60, 
    [
        { Name: "Electric Ring", Damage: 50 },
        { Name: "Pika Punch", Damage: 20 },
    ],
    {
        EnergyType: "Fire",
        Multiplier: 1.5,
    },
    {
        EnergyType: "Fighting",
        Multiplier: 20,
    }
);


const Charmeleon = pokemonGen.newPokemon(
    "Charmeleon", 
    "Opa Wouter", 
    "Fire", 
    60,
    [
        { Name: "Head Butt", Damage: 10 },
        { Name: "Flare", Damage: 30 },
    ],
    {
        EnergyType: "Water",
        Multiplier: 2,
    },
    {
        EnergyType: "Fighting",
        Multiplier: 10,
    }
);


pokemonGen.fight(Pikachu, Charmeleon);

console.log("er zijn nu " + pokemonGen.getPopulation() + " pokemon in leven");

console.log(`${Charmeleon.getNickname()}(${Charmeleon.getName()}) wordt nu vermoord`);

Charmeleon.setHitpoints(0);

pokemonGen.setAlivePokemon(1);

console.log("er zijn nu " + pokemonGen.getPopulation() + " pokemon in leven");