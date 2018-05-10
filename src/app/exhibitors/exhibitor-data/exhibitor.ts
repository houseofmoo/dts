import { Company } from './company';
import { Products } from './products';
import { CategoryType } from './category-type';
import { RequiredForms } from './required-forms';
import { Booth, BoothType, BoothByYear } from './booth';
import { Payment, PaymentByYear } from './payment';

export class Exhibitor {
  id: number;
  controlNumber: string;
  entryDate: string;

  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  faxNumber: string;

  company: Company;

  product: Products;
  category: CategoryType;

  yearsAttended: string[];

  hlta: boolean;
  hra: boolean;
  requiredForms: RequiredForms;

  booths: BoothByYear[];
  payments: PaymentByYear[];
  boothNotes: string;

  isAttending: boolean;
  specialRequests: string;
  notes: string;
  workOrders: string;

  constructor() {
    this.id = 0;
    this.entryDate = new Date().toLocaleString();
    this.company = new Company();
    this.product = new Products();
    this.requiredForms = new RequiredForms();
  }
}
