import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';

/* Display a single exhibitor */

@Component({
  selector: 'app-exhibitor',
  templateUrl: './exhibitor.component.html',
  styleUrls: ['./exhibitor.component.css']
})
export class ExhibitorComponent implements OnInit {
  @Input() exhibitor: Exhibitor;  // object we recieve
  updatedExhibitor: Exhibitor;    // object that will hold the changes until changes are saved
  @Output() saveChanges: EventEmitter<Exhibitor> = new EventEmitter<Exhibitor>();

  constructor() { }

  ngOnInit() {
    this.updatedExhibitor = this.ghettoDeepCopy(this.exhibitor);
  }

  // emit that we want to save changes
  onSaveChanges() {
    this.exhibitor = this.ghettoDeepCopy(this.updatedExhibitor);
    this.saveChanges.emit(this.exhibitor);
  }

  // user cancelled changes, restore original values
  onCancelChanges() {
    console.log(this.updatedExhibitor.company.name);
    console.log(this.updatedExhibitor.company.address);
    this.updatedExhibitor = this.ghettoDeepCopy(this.exhibitor);
  }

  // lul...
  private ghettoDeepCopy(e: Exhibitor): Exhibitor {
    return JSON.parse(JSON.stringify(e));
  }
}
