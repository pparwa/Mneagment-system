export class Payment {
    constructor(type, details, amount) {
        this.type = type;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.type} باید  پرداخت به دلیل ${this.details} مبلغ:${this.amount}`;
    }
}
