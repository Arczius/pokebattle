"use strict";

export default class Name {

    public constructor(
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