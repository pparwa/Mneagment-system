import { Invoices } from "./classes/inovoices.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const select = document.getElementById('select-type');
const inputname = document.getElementById("name");
const inputdetails = document.getElementById("detail");
const inputamount = document.getElementById("amount");
const button = document.querySelector("button");
const formelem = document.getElementById("form-invoice");
const ulelem = document.querySelector("ul");
let list = new ListTemplate(ulelem);
formelem.addEventListener('submit', (event) => {
    event.preventDefault();
    let doc;
    if (select.value === 'پرداخت') {
        doc = new Payment(select.value, inputdetails.value, inputamount.valueAsNumber);
    }
    else {
        doc = new Invoices(select.value, inputdetails.value, inputamount.valueAsNumber);
    }
    list.render(doc, select.value, 'start');
});
