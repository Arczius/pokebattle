"use strict";

export default class Name {

    constructor(
        protected Name:string,
    ){
        this.Name = Name;
    }

    protected setName(Name:string){
        this.Name = Name;
    }

    public getName(){
        return this.Name;
    }
}