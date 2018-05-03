import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';

/* Display a single exhibitor */

@Component({
  selector: 'app-exhibitor',
  templateUrl: './exhibitor.component.html',
  styleUrls: ['./exhibitor.component.css']
})
export class ExhibitorComponent implements OnInit {
  @Input() exhibitor: Exhibitor;
  @Output() saveChanges: EventEmitter<Exhibitor> = new EventEmitter<Exhibitor>();

  constructor() { }

  ngOnInit() {
    //console.log(this.exhibitor.personal.firstName);
  }

  onSaveChanges() {
    // store the changes into a Exhibitor object and return it
    this.saveChanges.emit(this.exhibitor);
  }
}
