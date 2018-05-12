import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exhibitor } from '../exhibitor-data/exhibitor';

@Component({
  selector: 'app-exhibitor-card',
  templateUrl: './exhibitor-card.component.html',
  styleUrls: ['./exhibitor-card.component.css']
})
export class ExhibitorCardComponent implements OnInit {
  @Input() exhibitor: Exhibitor;
  @Output() viewExhibitor: EventEmitter<Exhibitor> = new EventEmitter<Exhibitor>();

  constructor() { }

  ngOnInit() {
  }

  // emit to form to dispaly my data
  onViewExhibitor(): void {
    this.viewExhibitor.emit(this.exhibitor);
  }
}
