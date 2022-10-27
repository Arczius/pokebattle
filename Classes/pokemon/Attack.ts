"use strict"


interface AttackInterface{
    Name:string;
    Damage:number;
}

import Health from "./Health.ts";

export default class Attack extends Health {


    public constructor(
        Name:string,
        Nickname:string,
        Type:string,
        Hitpoints:number,
        protected Attack:Array<AttackInterface>,
    ){
        super(Name, Nickname, Type, Hitpoints);

        if(Attack.length <= 4 && Attack.length > 0){ 
            this.Attack = Attack;
        }
        else{
            console.error("You did something wrong by either using too many attacks, or too little"); 
        } 
    }
    
    public getSingleAttack(index:number){
        return this.Attack[index];
    }

    public getAttacks(){
        return this.Attack;
    }

    protected changeAttack(index:number, value:AttackInterface){
        if(this.Attack[index] !== null){
            this.Attack[index] = value;
        }
    }

    protected newAttack(value:AttackInterface){
        if(this.Attack.length <= 4){
            this.Attack.push(value);
        }
    }

}