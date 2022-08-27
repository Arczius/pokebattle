"use strict";

export default function pokemonAttack(fromPokemon:string,toPokemon:string, toPokemonHP:number, attackName:string, attackDamage:number, attackEnergyType:string, toPokemonRecistance:string, toPokemonWeakness:string, toPokemonWeaknessModifier:number, toPokemonRecistanceModifier:number){
    console.log(fromPokemon + " attacks " + toPokemon);
    console.log(fromPokemon + " does " + attackName + " to " + toPokemon);
    
    var damageAmount:number; 

    if(attackEnergyType === toPokemonWeakness){
        damageAmount = attackDamage * toPokemonWeaknessModifier;
    }
    
    else if(attackEnergyType === toPokemonRecistance){
        damageAmount = attackDamage / toPokemonRecistanceModifier;
    }
    else{
        damageAmount = attackDamage;
    }

    console.log("it does " + damageAmount + " damage");

    
}