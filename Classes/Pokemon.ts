"use strict";

import Recistance from "./pokemon/Resistance.ts";
import { WeaknessInterface, AttackInterface, ResistanceInterface } from "../interfaces/AllInterfaces.ts";

export default class Pokemon extends Recistance{
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