"use strict";

import Name from './Name.ts';

export default class Nickname extends Name{
    constructor(
        Name:string,
        protected Nickname:string,
    ) {
        super(Name);
        this.Nickname = Nickname;
    }

    protected setNickname(Nickname:string){
        this.Nickname = Nickname;
    }

    public getNickname(){
        return this.Nickname;
    }
}