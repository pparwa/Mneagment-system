export class Invoices {
    constructor(type, details, amount) {
        this.type = type;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.type} باید  دریافت شود به دلیل ${this.details} مبلغ:${this.amount} `;
    }
}
