"use strict";

import getPopulation from "./Classes/getPopulation.ts";
import makePokemon from "./Classes/makePokemon.ts";
import pokemonAttack from "./Functions/pokemonAttack.ts";
import fight from "./Functions/fight.ts";
import getPopulationHealth from "./Classes/getPopulationHealth.ts";


const pikachu = new makePokemon('Platypus (Pikachu)','Lightning',60, ["Electric Ring", "Pika Punch"],["Lightning", "Electric"] ,[50, 20], "Fire", 1.5, "Fighting", 20);

const charmeleon = new makePokemon('Coru (Charmeleon)', 'Fire', 60, ["Head Butt", "Flare"], ["Normal", "Fire"], [10, 30], "Water", 2, "Lightning", 10);

let alivePokemon = new getPopulation([pikachu,charmeleon]);

charmeleon.hitpoints = 36;

let averageHP = new getPopulationHealth([pikachu,charmeleon]);

console.log(averageHP);
console.log(alivePokemon);

fight(pikachu,charmeleon);