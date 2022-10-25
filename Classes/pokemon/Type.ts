"use strict";

import Nickname from "./Nickname.ts";

export default class Type extends Nickname {

    constructor(
        Name:string,
        Nickname:string,
        protected Type:string,
    ) {
        super(Name, Nickname);
        this.Type = Type;
    }

    protected setType(Type:string){
        this.Type = Type;
    }

    public getType(){
        return this.Type;
    }
}