"use strict";

import Recistance from "./pokemon/Resistance.ts";
import { WeaknessInterface, AttackInterface, ResistanceInterface } from "../interfaces/AllInterfaces.ts";

export default class Pokemon extends Recistance{

    /**
     * @param Name: name of the pokemon
     * @param Nickname: nickname of the pokemon
     * @param Type: type of the pokemon
     * @param Hitpoints: amount of hitpoints for the pokemon
     * @param Attack: attacks for the pokemon
     * @param Weakness: weakness of the pokemon
     * @param Resistance: resistance of the pokemon
     * @returns void
     */
    constructor(
        Name:string,
        Nickname:string,
        Type:string,
        Hitpoints:number,
        Attack:Array<AttackInterface>,
        Weakness:WeaknessInterface,
        Resistance:ResistanceInterface,
    ){
        super(Name,Nickname,Type,Hitpoints,Attack,Weakness,Resistance);
    }
}