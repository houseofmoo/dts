import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core/core.module';

import { BuyersModule } from './buyers/buyers.module';
import { ExhibitorsModule } from './exhibitors/exhibitors.module';
import { LhfHomeComponent } from './lhf-home/lhf-home.component';
import { RouterModule } from '@angular/router';

import { BuyersComponent } from './buyers/buyers-component/buyers.component';
import { ExhibitorSearchPageComponent } from './exhibitors/exhibitor-search-page/exhibitor-search-page.component';
import { ExhibitorCreatePageComponent } from './exhibitors/exhibitor-create-page/exhibitor-create-page.component';

@NgModule({
  imports: [
    CoreModule,
    BuyersModule,
    ExhibitorsModule,
    RouterModule.forChild([
      { path: 'lhf', component: LhfHomeComponent, children: [
        { path: 'buyers', component: BuyersComponent },
        { path: 'exhibitors/search', component: ExhibitorSearchPageComponent },
        { path: 'exhibitors/create', component: ExhibitorCreatePageComponent },
        { path: 'exhibitors', redirectTo: 'exhibitors/search', pathMatch: 'full' }
      ] }
    ])
  ],
  declarations: [
    LhfHomeComponent,
  ],
})
export class LhfExpoModule { }
