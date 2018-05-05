export class PaymentByYear {
  year: Date;
  Payments: Payment[];
}

export class Payment {
  date: Date;
  ammount: number;
  checkNumber: string;
}
