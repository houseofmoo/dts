import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';
import { ExhibitorService } from '../exhibitors-services/exhibitors.services';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.css']
})
export class ExhibitorsComponent implements OnInit {
  private _exhibitors: Exhibitor[];
  filteredExhibitors: Exhibitor[]

  constructor(private _service: ExhibitorService) { }

  ngOnInit() {
    this._service.getExhibitors().subscribe(
      e => this.recievedExhibitors(e),
      err => this.recievedError(<any>err)
    );
  }

  onSearch(): void {
    // filter by serach params
    this.filteredExhibitors = this._exhibitors;
  }

  // executes when a exhibitor needs to save its changes
  onSaveChanges(exhibitor: Exhibitor) {
    console.log(JSON.stringify(exhibitor));
    this._service.saveExhibitor(exhibitor).subscribe(
      s => this.savedExhibitor(s),
      err => this.recievedError(err),
    );
  }

  recievedExhibitors(e: Exhibitor[]): void {
    this._exhibitors = e;
  }

  recievedError(err: any): void {
    console.log("ERROR in exhibitors component: " + err);
  }

  savedExhibitor(e: any): any {
    console.log("Saved user" + JSON.stringify(e));
  }
}