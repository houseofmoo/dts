import { Company } from './company';
import { Products } from './products';
import { CategoryType } from './category-type';
import { RequiredForms } from './required-forms';
import { Booth, BoothType } from './booth';
import { Payment } from './payment';

export class Exhibitor {
    id: number;
    controlNumber: string;
    entryDate: Date;

    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    faxNumber: string;

    company: Company;

    product: Products;
    category: CategoryType;

    yearsAttended: Date[];

    hlta: boolean;
    hra: boolean;
    requiredForms: RequiredForms

    booths: { [key: string]: Booth };
    payments: { [key: string]: Payment}
    boothNotes: string;

    isAttending: boolean;
    specialRequests: string;
    notes: string;
    workOrders: string;
}