import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NationalSalesLeadsPageComponent } from './national-sales-leads-page/national-sales-leads-page.component';
import { LocalSalesLeadsPageComponent } from './local-sales-leads-page/local-sales-leads-page.component';

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'sales-leads', redirectTo: 'sales-leads/national', pathMatch: 'full' },
      { path: 'sales-leads/national', component: NationalSalesLeadsPageComponent },
      { path: 'sales-leads/local', component: LocalSalesLeadsPageComponent }
    ])
  ],
  declarations: [
    NationalSalesLeadsPageComponent,
    LocalSalesLeadsPageComponent
  ]
})
export class SalesLeadsModule { }
