"use strict";
var devMode = true;
var pokemon = /** @class */ (function () {
    function pokemon(name, energyType, maxHealth, attacksName, attacksEnergyType, attacksDamage, weakness, weaknessAmount, resistance, resistanceAmount) {
        this.name = name;
        this.energyType = energyType;
        this.maxHealth = maxHealth;
        this.hitpoints = maxHealth;
        //checks if both of the attacks array's are the same length, so we can have a set amount of attacks etc
        if (attacksName.length === attacksDamage.length && attacksName.length <= 4 && attacksDamage.length <= 4 && attacksEnergyType.length <= 4 && attacksEnergyType.length === attacksName.length) {
            this.attacksName = attacksName;
            this.attacksEnergyType = attacksEnergyType;
            this.attacksDamage = attacksDamage;
        }
        else {
            this.attacksName = ['unable to get the same amount of attacks'];
            this.attacksEnergyType = ['no energy type assigned'];
            this.attacksDamage = [0];
        }
        this.weakness = weakness;
        this.weaknessAmount = weaknessAmount;
        this.resistance = resistance;
        this.resistanceAmount = resistanceAmount;
    }
    return pokemon;
}());
var pikachu = new pokemon('Platypus (Pikachu)', 'Lightning', 60, ["Electric Ring", "Pika Punch"], ["Lightning", "Electric"], [50, 20], "Fire", 1.5, "Fighting", 20);
var charmeleon = new pokemon('Coru (Charmeleon)', 'Fire', 60, ["Head Butt", "Flare"], ["Normal", "Fire"], [10, 30], "Water", 2, "Lightning", 10);
function fight(pokemon1, pokemon2) {
    if (devMode) {
        console.log(pokemon1, pokemon2);
    }
}
var getPopulation = /** @class */ (function () {
    function getPopulation(pokemonList) {
        this.alivePokemon = 0;
        for (var i = 0; i != pokemonList.length; i++) {
            if (pokemonList[i].hitpoints > 0) {
                this.alivePokemon++;
            }
        }
    }
    return getPopulation;
}());
var alivePokemon = new getPopulation([pikachu, charmeleon]);
//fight(pikachu, charmeleon);
console.log(alivePokemon);
