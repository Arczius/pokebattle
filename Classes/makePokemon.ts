"use strict";

export default class makePokemon {

    name:string;
    energyType:string;
    maxHealth:number;
    hitpoints:number;
    attacksName:Array<string>;
    attacksEnergyType:Array<string>;
    attacksDamage:Array<number>;
    weakness:string;
    weaknessAmount:number;
    resistance:string;
    resistanceAmount:number;


    constructor(
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
        this.name = name;
        this.energyType = energyType;
        this.maxHealth = maxHealth;
        this.hitpoints = maxHealth;

        //checks if both of the attacks array's are the same length, so we can have a set amount of attacks etc
        if(attacksName.length === attacksDamage.length && attacksName.length <= 4 && attacksDamage.length <= 4 && attacksEnergyType.length <= 4 && attacksEnergyType.length === attacksName.length){
            this.attacksName = attacksName;
            this.attacksEnergyType = attacksEnergyType
            this.attacksDamage = attacksDamage;
        }
        else{
            this.attacksName = ['unable to get the same amount of attacks'];
            this.attacksEnergyType = ['no energy type assigned'];
            this.attacksDamage = [0];
        }

        this.weakness = weakness;
        this.weaknessAmount = weaknessAmount;
        this.resistance = resistance;
        this.resistanceAmount = resistanceAmount;
    }
}