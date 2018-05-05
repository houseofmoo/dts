import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../core/core/core.module';

import { ExhibitorComponent } from './exhibitor-component/exhibitor.component';
import { ExhibitorPageComponent } from './exhibitor-page/exhibitor-page.component';
import { ExhibitorCardComponent } from './exhibitor-card/exhibitor-card.component';
import { ExhibitorFormComponent } from './exhibitor-form/exhibitor-form.component';
import { ExhibitorService } from './exhibitors-services/exhibitors.service';
import { BoothRateService } from './exhibitors-services/booth-rates.service';
import { ApiConfigs } from '../config/api-configs';


@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      { path: 'exhibitors', component: ExhibitorPageComponent }
    ]),
    BrowserAnimationsModule,
  ],
  declarations: [
    ExhibitorComponent,
    ExhibitorCardComponent,
    ExhibitorFormComponent,
    ExhibitorPageComponent,
  ],
  providers: [
    ExhibitorService,
    BoothRateService,
    ApiConfigs
  ]
})

export class ExhibitorsModule { }
