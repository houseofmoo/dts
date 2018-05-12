import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';

import { CoreModule } from '../../core/core/core.module';

import { ExhibitorCardComponent } from './exhibitor-card/exhibitor-card.component';
import { ExhibitorFormComponent } from './exhibitor-form/exhibitor-form.component';
import { ExhibitorService } from './exhibitors-services/exhibitors.service';
import { BoothRateService } from './exhibitors-services/booth-rates.service';
import { ExhibitorSearchPageComponent } from './exhibitor-search-page/exhibitor-search-page.component';
import { ExhibitorCreatePageComponent } from './exhibitor-create-page/exhibitor-create-page.component';
import { ExhibitorSubNavbarComponent } from './exhibitor-sub-navbar/exhibitor-sub-navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [
    ExhibitorCardComponent,
    ExhibitorFormComponent,
    ExhibitorSearchPageComponent,
    ExhibitorCreatePageComponent,
    ExhibitorSubNavbarComponent,
  ],
  providers: [
    ExhibitorService,
    BoothRateService
  ],
  exports: [
    ExhibitorCreatePageComponent,
    ExhibitorSearchPageComponent
  ]
})

export class ExhibitorsModule { }
