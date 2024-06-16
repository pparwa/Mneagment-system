import { HasFormat } from "../interfaces/HasFormat.js";

export class Invoices implements HasFormat{
  constructor(public type:string,private details:string,readonly amount:number){}


  format(){
      return `${this.type} باید  دریافت شود به دلیل ${this.details} مبلغ:${this.amount} `    
  }
}