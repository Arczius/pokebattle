"use strict";

import makePokemon from "./makePokemon.ts";

export default class pokemonGenerator {

    public newPokemon(
        name:string, 
        energyType:string, 
        maxHealth:number, 
        attacksName:Array<string>, 
        attacksEnergyType:Array<string>,
        attacksDamage:Array<number>,
        weakness:string,
        weaknessAmount:number,
        resistance:string,
        resistanceAmount:number
        ){


        return new makePokemon(name,energyType,maxHealth,attacksName,attacksEnergyType,attacksDamage,weakness,weaknessAmount,resistance,resistanceAmount);
    }


    public getPopulation(pokemonList:Array<any>){
        var alivePokemon:number = 0; 

        pokemonList.forEach(function(pokemon){
            if(pokemon.hitpoints > 0){
                alivePokemon++;
            }
        });
        return alivePokemon;
    }

    public getPopulationHealth(pokemonList:Array<any>){
        var totalhp:number = 0;

        pokemonList.forEach(function(pokemon){
            if(pokemon.hitpoints > 0){
                totalhp + pokemon.hitpoints;
            }
        })

        return totalhp / pokemonList.length;
    }
}
