"use strict";

import Nickname from "./Nickname.ts";

export default class Type extends Nickname {

    constructor(
        private Name:string,
        private Nickname:string,
        private Type:string,
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