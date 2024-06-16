import { HasFormat } from "../interfaces/HasFormat.js";

export class Payment implements HasFormat {

    constructor(
     public  type:string,
     private  details:string,
      readonly amount:number
    ){}
    format() {
        return `${this.type} باید  پرداخت به دلیل ${this.details} مبلغ:${this.amount}`
    }
}