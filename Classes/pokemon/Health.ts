"use strict";

import Hitpoints from "./Hitpoints.ts";

class Health extends Hitpoints{
    protected Health;

    constructor(
        Name:string,
        Nickname:string,
        Type:string,
        Hitpoints:number,
    ) {
        super(Name, Nickname, Type, Hitpoints);
        this.Health = Hitpoints;
    }

    public getHealth(){
        return this.Health;
    }

    protected setHealth(Health:number){
        this.Health = Health;    
    }
}