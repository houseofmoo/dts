import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { CoreModule } from '../core/core/core.module';

import { ExhibitorsComponent } from './exhibitors-component/exhibitors.component';
import { ExhibitorComponent } from './exhibitor-component/exhibitor.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      { path: "exhibitors", component: ExhibitorsComponent }
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    ExhibitorsComponent,
    ExhibitorComponent
  ]
})

export class ExhibitorsModule { }
