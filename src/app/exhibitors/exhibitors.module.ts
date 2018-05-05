import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { CoreModule } from '../core/core/core.module';

import { ExhibitorsComponent } from './exhibitors-component/exhibitors.component';
import { ExhibitorComponent } from './exhibitor-component/exhibitor.component';
import { ExhibitorService } from './exhibitors-services/exhibitors.service';
import { BoothRateService } from './exhibitors-services/booth-rates.service';
import { ApiConfigs } from '../config/api-configs';


@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      { path: 'exhibitors', component: ExhibitorsComponent }
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    ExhibitorsComponent,
    ExhibitorComponent,
  ],
  providers: [
    ExhibitorService,
    BoothRateService,
    ApiConfigs
  ]
})

export class ExhibitorsModule { }
