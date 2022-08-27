"use strict"

export default class getPopulation{
    alivePokemon:any = 0;

    constructor(
        pokemonList:Array<any>
    ){

        for(let i = 0; i != pokemonList.length; i++){
            if(pokemonList[i].hitpoints > 0){
                this.alivePokemon++;
            }
        }
        

    }
}