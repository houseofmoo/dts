import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';

@Component({
  selector: 'app-exhibitor-create-page',
  templateUrl: './exhibitor-create-page.component.html',
  styleUrls: ['./exhibitor-create-page.component.css']
})
export class ExhibitorCreatePageComponent implements OnInit, OnChanges {
  newExhibitor = new Exhibitor();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('new change');
  }
}
