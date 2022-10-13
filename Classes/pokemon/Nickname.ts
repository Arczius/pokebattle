"use strict";

import Name from './Name.ts';

export default class Nickname extends Name{
    constructor(
        private Name:string,
        private Nickname:string,
    ) {
        super(Name);
        this.Nickname = Nickname;
    }

    protected setNickname(Nickname){
        this.Nickname = Nickname;
    }

    public getNickname(){
        return this.Nickname;
    }
}