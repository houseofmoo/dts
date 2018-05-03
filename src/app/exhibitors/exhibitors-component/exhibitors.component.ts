import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.css']
})
export class ExhibitorsComponent implements OnInit {
  exhibitors: Exhibitor[] = [
    {
      id: 1,
      personal: {
        firstName: "John",
        lastName: "Moodie",
        title: "Captain",
      },
    },
    {
      id: 2,
      personal: {
        firstName: "Nicole",
        lastName: "Noda-Muth",
        title: "Cat-whisperer",
      },
    },
    {
      id: 3,
      personal: {
        firstName: "Mike",
        lastName: "Han",
        title: "FBI",
      },
    },
    {
      id: 4,
      personal: {
        firstName: "Jung",
        lastName: "Lee",
        title: "Thor Fan Club President",
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSaveChanges(exhibitor: Exhibitor) {
    console.log(JSON.stringify(exhibitor));
  }
}
