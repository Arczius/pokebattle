"use strict"

export default class getPopulationHealth {
    average:number = 0;

    constructor(
        pokemonArr:Array<any>
    ){
        var totalHP:number = 0;
        
        pokemonArr.forEach(function(pokemon, index){
            totalHP += pokemon.hitpoints;
        });

        this.average = totalHP / pokemonArr.length;
    }
}