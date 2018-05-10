import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';

@Component({
  selector: 'app-exhibitor-form',
  templateUrl: './exhibitor-form.component.html',
  styleUrls: ['./exhibitor-form.component.css']
})

export class ExhibitorFormComponent implements OnInit, OnChanges {
  @Input() exhibitor: Exhibitor;  // object we recieve
  uneditedExhibitor: Exhibitor;   // object that will hold the changes until page is left
  @Output() saveChanges: EventEmitter<Exhibitor> = new EventEmitter<Exhibitor>();

  constructor() { }

  ngOnInit() {
    this.exhibitor.entryDate = new Date().toLocaleString();
    this.uneditedExhibitor = this.ghettoDeepCopy(this.exhibitor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes!');
  }

  // emit that we want to save changes
  onSaveChanges() {
    this.saveChanges.emit(this.exhibitor);
  }

  doSomething(newVal: Exhibitor) {
    // this.exhibitor = newVal;
    console.log(newVal);
  }

  // user cancelled changes, restore original values
  onCancelChanges() {
    this.exhibitor = this.ghettoDeepCopy(this.uneditedExhibitor);
  }

  // lul...
  private ghettoDeepCopy(e: Exhibitor): Exhibitor {
    return JSON.parse(JSON.stringify(e));
  }
}
