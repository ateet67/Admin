 import { UiSwitchModule } from 'ngx-ui-switch' ; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LookupRoutingModule } from './lookup-routing.module';
import { ManufacturerComponent, DealerStatusViewComponent} from './manufacturer/manufacturer.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { LeadSourceComponent } from './lead-source/lead-source.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA} from '@angular/core';
@NgModule({
  declarations: [
    ManufacturerComponent,
    DealerStatusViewComponent,
    LeadSourceComponent,
    
    
   
  ],
  imports: [
    CommonModule,
    LookupRoutingModule,
    // Ng2SmartTableModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    SharedModule,
    NgbModule,
    // NgbButtonsModule,
    UiSwitchModule.forRoot({
      size:"small"
    })
  
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class LookupModule { }
