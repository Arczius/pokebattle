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
        console.log(pokemon1.name + " has " + pokemon1.hitpoints + "hp");
        console.log(pokemon2.name + " has " + pokemon2.hitpoints + "hp");


        console.log("doing " + pokemon1.attacksName[0]);

        const attack1 = this.attackCalculator(pokemon1.attacksDamage[0], pokemon1.attacksEnergyType[0], pokemon2.resistance, pokemon2.weakness, pokemon2.weaknessAmount, pokemon2.resistanceAmount);
        this.doAttack(pokemon2,attack1);

        console.log(pokemon1.name + " has " + pokemon1.hitpoints + "hp");
        console.log(pokemon2.name + " has " + pokemon2.hitpoints + "hp");

        console.log("doing " + pokemon2.attacksName[1])

        const attack2 = this.attackCalculator(pokemon2.attacksDamage[1], pokemon2.attacksEnergyType[1], pokemon1.resistance, pokemon1.weakness, pokemon1.weaknessAmount, pokemon1.resistanceAmount);
        this.doAttack(pokemon1,attack2);

        console.log(pokemon1.name + " has " + pokemon1.hitpoints + "hp");
        console.log(pokemon2.name + " has " + pokemon2.hitpoints + "hp");
    }

    private doAttack(toPokemon:any, amount:number){
        if(toPokemon.hitpoints - amount < 0){
            toPokemon.hitpoints = 0;
        }
        else{
            toPokemon.hitpoints = toPokemon.hitpoints - amount;
        }
    }

    private attackCalculator(attackDamage:number, attackEnergyType:string, toPokemonRecistance:string, toPokemonWeakness:string, toPokemonWeaknessModifier:number, toPokemonRecistanceModifier:number){
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