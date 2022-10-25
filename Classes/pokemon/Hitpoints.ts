"use strict";

import Type from "./Type.ts";

class Hitpoints extends Type{

    constructor(
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