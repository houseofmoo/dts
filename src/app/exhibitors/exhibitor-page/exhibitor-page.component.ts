import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';
import { ExhibitorService } from '../exhibitors-services/exhibitors.service';
import { BoothRateService } from '../exhibitors-services/booth-rates.service';
import { BoothRates } from '../exhibitor-data/booth';

/*
Idea: Instead of a search window, we have the form
the user can start typing into the form
we begin searching as the user types, but we wait x time (say 500ms)
before updating the search results.
As the search results populate the user can either select a search result to view in the form
or can continue typing to create a new input...
but how do we tell when the user actually wants to create a new input...
need to ask nicole what is up

SPLIT up search and enter new record tabs thats how we know if we're entering a new record!
 */

@Component({
  selector: 'app-exhibitor-page',
  templateUrl: './exhibitor-page.component.html',
  styleUrls: ['./exhibitor-page.component.css']
})
export class ExhibitorPageComponent implements OnInit {
  private _exhibitors: Exhibitor[];
  filteredExhibitors: Exhibitor[];
  private _boothRates: BoothRates;

  constructor(private _exhibitorService: ExhibitorService,
    private _boothRateService: BoothRateService) { }

  ngOnInit() {
    // get exhibitors list - i think we're going to change this and instad
    // only fetch data when we have search params otherwise we'll be fetching like
    this._exhibitorService.getExhibitors().subscribe(
      e => { this._exhibitors = e; },
      err => this.recievedError(err)
    );

    // get booth rates
    this._boothRateService.getBoothRates().subscribe(
      b => { this._boothRates = b; },
      err => this.recievedError(err)
    );
  }

  onExhibitorSaveChanges(exhibitor: Exhibitor) {
    this._exhibitorService.saveExhibitor(exhibitor).subscribe(
      s => { console.log('Saved user' + JSON.stringify(s)); },
      err => this.recievedError(err),
    );

    // so what an exhibitor is edited, we dont need to worry about anything, we're good
    // but when an object is created, we need to get the created objects Id in
    // to the _exhibitors array
  }

  recievedError(err: any): void {
    console.log('ERROR in exhibitors component: ' + err);
  }

  onSearch(): void {
    // filter by serach params then...
    this.filteredExhibitors = this._exhibitors;
  }

  onClearResults(): void {
    this.filteredExhibitors = null;
  }

  onCreateNewExhibitor(): void {
    // add an empty exhibitor with NO ID
    // this will indicate to the api that it is a new entry
    const newExhibitor = new Exhibitor();
    newExhibitor.firstName = 'Create new exhibitor';

    if (!this.filteredExhibitors || this.filteredExhibitors.length === 0) {
      this.filteredExhibitors = [newExhibitor];
    } else {
      this.filteredExhibitors.unshift(newExhibitor);
    }
  }
}
