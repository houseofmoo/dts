import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  firstName: string;
  lastName: string;
  entryDate: string;
  title: string;
  companyName: string;
  controlNumber: string;
  companyAddress: string; // street address, city, state, zip
  companyPhoneNumber: string;
  companyFaxNumber: string;
  


  constructor() { }

  ngOnInit() {
  }

}
