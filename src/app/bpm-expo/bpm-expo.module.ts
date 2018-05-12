import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmHomeComponent } from './bpm-home/bpm-home.component';
import { CoreModule } from '../core/core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      { path: 'bpm', component: BpmHomeComponent }
    ])
  ],
  declarations: [BpmHomeComponent]
})
export class BpmExpoModule { }
