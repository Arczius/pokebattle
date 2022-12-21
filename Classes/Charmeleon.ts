"use strict";

import Pokemon from "./Pokemon.ts";
import { WeaknessInterface, AttackInterface, ResistanceInterface } from "../interfaces/AllInterfaces.ts";


/**
 * class representing a Charmeleon
 * @extends Pokemon
 */
export default class Charmeleon extends Pokemon {

    /**
     * 
     * @param Nickname - the nickname of this Charmeleon
     */
    constructor(
        Nickname:string,
    ){
        const Name = "Charmeleon";
        const Type = "Fire";
        const Hitpoints = 60;

        const Attack:Array<AttackInterface> = [
            { Name: "Head Butt", Damage: 10 },
            { Name: "Flare", Damage: 30 },
        ];

        const Weakness:WeaknessInterface = {
            EnergyType: "Water",
            Multiplier: 2,
        }

        const Resistance:ResistanceInterface = {
            EnergyType: "Fighting",
            Multiplier: 10,
        }

        super(Name,Nickname,Type,Hitpoints,Attack,Weakness,Resistance);
    }
}