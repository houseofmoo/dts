import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';

@Component({
  selector: 'app-exhibitor-search-page',
  templateUrl: './exhibitor-search-page.component.html',
  styleUrls: ['./exhibitor-search-page.component.css']
})
export class ExhibitorSearchPageComponent implements OnInit {
  searchResult: Exhibitor;

  constructor() {
    // items in div are hidden when search result is null
    this.searchResult = null;
   }

  ngOnInit() {
    console.log(this.searchResult);
  }

}
