"use strict";

import Weakness from "./Weakness.ts";

import { ResistanceInterface, WeaknessInterface, AttackInterface } from "../../interfaces/AllInterfaces.ts";

export default class Recistance extends Weakness{

    constructor(
        Name:string,
        Nickname:string,
        Type:string,
        Hitpoints:number,
        Attack:Array<AttackInterface>,
        Weakness:WeaknessInterface,
        protected Resistance:ResistanceInterface,
    ){
        super(Name,Nickname,Type,Hitpoints,Attack,Weakness);

        this.Resistance = Resistance;
    }

    public getResistance(){
        return this.Resistance;
    }

    public setResistance(value:ResistanceInterface){
        this.Resistance = value;
    }
}