/* module that will be included in all other modules */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})

export class CoreModule { }
