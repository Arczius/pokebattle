"use strict";

import Pokemon from "./Pokemon.ts";
import { AttackInterface, WeaknessInterface, ResistanceInterface } from "../interfaces/AllInterfaces.ts";

export default class pokemonGenerator {
    private AlivePokemon:number = 0;

    public newPokemon(
        Name:string,
        Nickname:string,
        Type:string,
        Hitpoints:number,
        Attack:Array<AttackInterface>,
        Weakness:WeaknessInterface,
        Resistance:ResistanceInterface,
    ){
        this.AlivePokemon++;
        return new Pokemon(Name,Nickname,Type,Hitpoints,Attack,Weakness,Resistance);
    }


    public getPopulation(){
        return this.AlivePokemon;
    }

    public fight(pokemon1:Pokemon, pokemon2:Pokemon){
        console.log(pokemon1.getNickname() + `(${pokemon1.getName()})` + " has " + pokemon1.getHitpoints() + "HP");
        console.log(pokemon2.getNickname() + `(${pokemon2.getName()})` + " has " + pokemon2.getHitpoints() + "HP");


        console.log(pokemon1.getNickname() + `(${pokemon1.getName()})` +" does " + pokemon1.getSingleAttack(0).Name);

        const attack1 = this.attackCalculator(pokemon1.getSingleAttack(0), pokemon1.getType(), pokemon2.getResistance(), pokemon2.getWeakness())
        this.doAttack(pokemon2, attack1);

        console.log(pokemon1.getNickname() + `(${pokemon1.getName()})` + " has " + pokemon1.getHitpoints() + "HP");
        console.log(pokemon2.getNickname() + `(${pokemon2.getName()})` + " has " + pokemon2.getHitpoints() + "HP");

        // console.log("doing " + pokemon2.attacksName[1])

        console.log(pokemon2.getNickname() + `(${pokemon2.getName()})` +" does " + pokemon2.getSingleAttack(0).Name);

        // const attack2 = this.attackCalculator(pokemon2.attacksDamage[1], pokemon2.attacksEnergyType[1], pokemon1.resistance, pokemon1.weakness, pokemon1.weaknessAmount, pokemon1.resistanceAmount);
        const attack2 = this.attackCalculator(pokemon2.getSingleAttack(1), pokemon2.getType(), pokemon1.getResistance(), pokemon1.getWeakness())
        this.doAttack(pokemon1,attack2);

        console.log(pokemon1.getNickname() + `(${pokemon1.getName()})` + " has " + pokemon1.getHitpoints() + "HP");
        console.log(pokemon2.getNickname() + `(${pokemon2.getName()})` + " has " + pokemon2.getHitpoints() + "HP");
    }

    private doAttack(toPokemon:Pokemon, amount:number){
        if(toPokemon.getHitpoints() - amount <= 0){
            this.AlivePokemon--;
            toPokemon.setHitpoints(0);
        }
        else{
            toPokemon.setHitpoints(toPokemon.getHitpoints() - amount); 
        }
    }

    private attackCalculator(
            Attack:AttackInterface, 
            fromPokemonType:string,
            toPokemonRecistance:ResistanceInterface, 
            toPokemonWeakness:WeaknessInterface
        ){
        if(fromPokemonType === toPokemonWeakness.EnergyType) {
            return Attack.Damage * toPokemonWeakness.Multiplier; 
        }
        else if(fromPokemonType === toPokemonRecistance.EnergyType){
            return Attack.Damage / toPokemonRecistance.Multiplier;
        }
        else{
            return Attack.Damage;
        }   
    }
}