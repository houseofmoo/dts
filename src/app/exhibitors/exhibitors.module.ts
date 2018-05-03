import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { CoreModule } from '../core/core/core.module';

import { ExhibitorsComponent } from './exhibitors-component/exhibitors.component';

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
  ],
  declarations: [
    ExhibitorsComponent
  ]
})

export class ExhibitorsModule { }
