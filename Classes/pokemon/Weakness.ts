"use strict";

import Attack from "./Attack.ts";

import { WeaknessInterface, AttackInterface } from "../../interfaces/AllInterfaces.ts";

export default class Weakness extends Attack {
    constructor(
        Name:string,
        Nickname:string,
        Type:string,
        Hitpoints:number,
        Attack:Array<AttackInterface>,
        protected Weakness:WeaknessInterface,
    ){
        super(Name, Nickname, Type, Hitpoints, Attack);
        this.Weakness = Weakness;
    }

    public getWeakness(){
        return this.Weakness;
    }

    protected setWeaknesss(value:WeaknessInterface)  {
        this.Weakness = value;
    }
}