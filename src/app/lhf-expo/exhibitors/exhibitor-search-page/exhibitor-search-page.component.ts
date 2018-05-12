import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';
import { ExhibitorService } from '../exhibitors-services/exhibitors.service';
import { BoothRateService } from '../exhibitors-services/booth-rates.service';

@Component({
  selector: 'app-exhibitor-search-page',
  templateUrl: './exhibitor-search-page.component.html',
  styleUrls: ['./exhibitor-search-page.component.css']
})
export class ExhibitorSearchPageComponent implements OnInit {
  searchResults: Exhibitor[];

  constructor(private _exhibitorService: ExhibitorService,
    private _boothRateService: BoothRateService) { }

  ngOnInit() {
    console.log(this.searchResults);
  }

  onSearch() {
      // get exhibitors list - i think we're going to change this and instad
    // only fetch data when we have search params otherwise we'll be fetching like
    this._exhibitorService.getExhibitors().subscribe(
      e => { this.searchResults = e; },
      err => { console.log(err); }
    );

    // get booth rates
    // this._boothRateService.getBoothRates().subscribe(
    //   b => { this._boothRates = b; },
    //   err => this.recievedError(err)
    // );
  }

}
