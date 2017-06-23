import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './servicios/logger.service';
import { CapitalizePipe, ElipsisPipe } from './pipes/capitalize.pipe';
import { ToComaDecimalPipe } from './pipes/to-coma-decimal.pipe';
import { UpperCaseValidatorDirective } from './upper-case-validator.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CapitalizePipe, ToComaDecimalPipe, ElipsisPipe, UpperCaseValidatorDirective],
  exports: [CapitalizePipe, ToComaDecimalPipe, ElipsisPipe, UpperCaseValidatorDirective]
})
export class MyCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: MyCoreModule) {
    if (parentModule) {
      const msg = `ModuleName has already been loaded. 
        Import ModuleName once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
 }

export * from './index';
