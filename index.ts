"use strict";

class pokemon{

    name:string;
    energyType:string;
    maxHealth:number;
    hitpoints:number;
    attacksName:Array<string>
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
        if(attacksName.length === attacksDamage.length && attacksName.length <= 4 && attacksDamage.length <= 4){
            this.attacksName = attacksName;
            this.attacksDamage = attacksDamage;
        }
        else{
            this.attacksName = ['unable to get the same amount of attacks'];
            this.attacksDamage = [0];
        }

        this.weakness = weakness;
        this.weaknessAmount = weaknessAmount;
        this.resistance = resistance;
        this.resistanceAmount = resistanceAmount;
    }
}


var pikachu = new pokemon('Platypus','Lightning',60, ["Electric Ring", "Pika Punch"], [50, 20], "Fire", 1.5, "Fighting", 20);

var charmeleon = new pokemon('Coru', 'Fire', 60, ["Head Butt", "Flare"], [10, 30], "Water", 2, "Lightning", 10);

console.log(pikachu);
console.log(charmeleon);
