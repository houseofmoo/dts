/* module that will be included in all other modules */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiConfigs } from '../../config/api-configs';

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

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ApiConfigs]
    };
  }
}
