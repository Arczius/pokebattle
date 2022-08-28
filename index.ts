"use strict";

import fight from "./Functions/fight.ts";
import pokemonGenerator from './Classes/pokemonGenerator.ts';


const pokemon = new pokemonGenerator();


const pikachu = pokemon.newPokemon('Platypus (Pikachu)','Lightning',60, ["Electric Ring", "Pika Punch"],["Lightning", "Electric"] ,[50, 20], "Fire", 1.5, "Fighting", 20);

const charmeleon = pokemon.newPokemon('Coru (Charmeleon)', 'Fire', 60, ["Head Butt", "Flare"], ["Normal", "Fire"], [10, 30], "Water", 2, "Lightning", 10);


console.log(pokemon.getPopulation([pikachu,charmeleon]));

//fight(pikachu,charmeleon);