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
        let alivePokemon:number = 0; 

        pokemonList.forEach(function(pokemon){
            if(pokemon.hitpoints > 0){
                alivePokemon++;
            }
        });
        return alivePokemon;
    }

    public getPopulationHealth(pokemonList:Array<any>){
        let totalhp:number = 0;

        pokemonList.forEach(function(pokemon){
            if(pokemon.hitpoints > 0){
                totalhp + pokemon.hitpoints;
            }
        })

        return totalhp / pokemonList.length;
    }

    public fight(pokemon1:any, pokemon2:any){

    }

    private attack(attackDamage:number, attackEnergyType:string, toPokemonRecistance:string, toPokemonWeakness:string, toPokemonWeaknessModifier:number, toPokemonRecistanceModifier:number){
        let damageAmount:number;

        if(attackEnergyType === toPokemonWeakness){
            damageAmount = attackDamage * toPokemonWeaknessModifier;
        }
    
        else if(attackEnergyType === toPokemonRecistance){
            damageAmount = attackDamage / toPokemonRecistanceModifier;
        }
        else{
            damageAmount = attackDamage;
        }

        return damageAmount;
    }
}
