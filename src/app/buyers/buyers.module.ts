import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { CoreModule } from '../core/core/core.module';

import { BuyersComponent } from './buyers-component/buyers.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      { path: "buyers", component: BuyersComponent }
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    BuyersComponent
  ]
})
export class BuyersModule { }
