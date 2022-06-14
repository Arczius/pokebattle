"use strict";
var pokemon = /** @class */ (function () {
    function pokemon(name, energyType, maxHealth, attacksName, attacksDamage, weakness, weaknessAmount, resistance, resistanceAmount) {
        this.name = name;
        this.energyType = energyType;
        this.maxHealth = maxHealth;
        this.hitpoints = maxHealth;
        //checks if both of the attacks array's are the same length, so we can have a set amount of attacks etc
        if (attacksName.length === attacksDamage.length && attacksName.length <= 4 && attacksDamage.length <= 4) {
            this.attacksName = attacksName;
            this.attacksDamage = attacksDamage;
        }
        else {
            this.attacksName = ['unable to get the same amount of attacks'];
            this.attacksDamage = [0];
        }
        this.weakness = weakness;
        this.weaknessAmount = weaknessAmount;
        this.resistance = resistance;
        this.resistanceAmount = resistanceAmount;
    }
    return pokemon;
}());
var pikachu = new pokemon('Platypus', 'Lightning', 60, ["Electric Ring", "Pika Punch"], [50, 20], "Fire", 1.5, "Fighting", 20);
console.log(pikachu);
