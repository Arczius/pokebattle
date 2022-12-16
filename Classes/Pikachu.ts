"use strict"

import Pokemon from "./Pokemon.ts";
import { WeaknessInterface, AttackInterface, ResistanceInterface } from "../interfaces/AllInterfaces.ts";


export default class Pikachu extends Pokemon {

    constructor(
        Nickname:string,
    ){
        const Name = "Pikachu";
        const Type = "Lightning";
        const Hitpoints = 60;

        const Attack:Array<AttackInterface> = [
            { Name: "Electric Ring", Damage: 50 },
            { Name: "Pika Punch", Damage: 20 },
        ];

        const Weakness:WeaknessInterface = {
            EnergyType: "Fire",
            Multiplier: 1.5,
        }

        const Resistance:ResistanceInterface = {
            EnergyType: "Fighting",
            Multiplier: 20,
        }

        super(Name,Nickname,Type,Hitpoints,Attack,Weakness,Resistance);
    }
}