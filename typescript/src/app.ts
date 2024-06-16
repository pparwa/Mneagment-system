import { Invoices } from "./classes/inovoices.js";
import { Payment } from "./classes/Payment.js";
import { HasFormat } from "./interfaces/HasFormat.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const select = document.getElementById('select-type') as HTMLSelectElement;
const inputname = document.getElementById("name")  as HTMLInputElement;
const inputdetails = document.getElementById("detail") as HTMLInputElement;
const inputamount = document.getElementById("amount") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const formelem = document.getElementById("form-invoice") as HTMLFormElement;
const ulelem = document.querySelector("ul") as HTMLUListElement
let list = new ListTemplate(ulelem)
formelem.addEventListener('submit',(event:Event)=>{
    event.preventDefault()
    let doc : HasFormat;
    if(select.value === 'پرداخت'){
         doc = new Payment(select.value,inputdetails.value,inputamount.valueAsNumber)

    }else{
          doc = new Invoices(select.value,inputdetails.value,inputamount.valueAsNumber)
    }
    list.render(doc,select.value,'start')
})
