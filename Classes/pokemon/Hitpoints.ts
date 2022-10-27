"use strict";

import Type from "./Type.ts";

export default class Hitpoints extends Type{

    public constructor(
        Name:string,
        Nickname:string,
        Type:string,
        protected Hitpoints:number,
    ) {
        super(Name, Nickname, Type);
        this.Hitpoints = Hitpoints;
    }

    public getHitpoints(){
        return this.Hitpoints;
    }

    protected setHitpoints(Hitpoints:number){
        this.Hitpoints = Hitpoints;
    }
}